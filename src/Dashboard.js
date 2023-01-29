import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Title } from "react-admin";
import styles from "./styles.css";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
// import { phnumber } from "./CustomLoginPage";
import firebase from "firebase/compat/app";

export default () => {
  const [users, setUsers] = React.useState([]);
  const [managers, setManagers] = React.useState([]);
  const [phnumber, setPhnumber] = React.useState("");
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection("Users").onSnapshot((snapshot) => {
      const users = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(users);
    });
    return unsubscribe;
  }, []);

  React.useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db.collection("Managers").onSnapshot((snapshot) => {
      const managers = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setManagers(managers);
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <Card
        sx={{
          mt: 3,
          ml: 1,
          mr: 1,
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            <b>Cloud </b> K
          </Typography>
          <br></br>
          <Typography variant="body2" component="p">
            The Virtual kitchen that never closes. This DBMS project is created
            by Group 1 CSE(AI & ML)
          </Typography>
          <br />
        </CardContent>
      </Card>
      {/* <Card sx={{ mt: 3, ml: 1, mr: 1, mb: 0, boxShadow: 2, borderRadius: 1 }}>
        <CardActions>
          <Button
            href="/#/Users"
            size="medium"
            variant="contained"
            boxShadow="2"
            sx={{ mt: 1, ml: 1, mr: 1, mb: 1 }}
          >
            Users
          </Button>
          <Button
            href="/#/Cooks"
            size="medium"
            variant="contained"
            boxShadow="2"
            sx={{ mt: 1, ml: 1, mr: 1, mb: 1 }}
          >
            Cooks
          </Button>
          <Button
            href="/#/Blogs"
            size="medium"
            variant="contained"
            boxShadow="2"
            sx={{ mt: 1, ml: 1, mr: 1, mb: 1 }}
          >
            Blogs
          </Button>
        </CardActions>
      </Card> */}
    </>
  );
};
