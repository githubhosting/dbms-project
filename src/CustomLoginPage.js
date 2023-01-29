// LoginPage.js
import React from "react";
import { Login, LoginForm } from "react-admin";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import ForgotPasswordButton from "./CustomForgotPassword";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "#/",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      // The default selected country.
      defaultCountry: "IN",
      recaptchaParameters: {
        size: "invisible", // 'invisible' or 'compact'
        // badge: "middle", //' bottomright' or 'inline' applies to invisible.
      },
    },
  ],
  // Optional callbacks in order to get Access Token from Google,Facebook,... etc
  callbacks: {
    signInSuccessWithAuthResult: (result) => {
      const credential = result.credential;
      const user = result.user;
      var uid = user.uid;
      const phoneNumber = user.phoneNumber;
      console.log({ result, user });
      console.log({ uid, phoneNumber });
    },
  },
};

const SignInScreen = () => (
  <StyledFirebaseAuth firebaseAuth={firebase.auth()} uiConfig={uiConfig} />
);

const CustomLoginForm = (props) => (
  <div>
    {/* <LoginForm {...props} /> */}
    <SignInScreen />
  </div>
);

const CustomLoginPage = (props) => (
  <Login
    {...props}
    backgroundImage="https://cdn.wallpapersafari.com/80/94/AC21PJ.jpg"
  >
    <CustomLoginForm {...props} />
  </Login>
);

export default CustomLoginPage;
