import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import {Box, Grid,} from "@mui/material";
import {LoginForm} from "./components/Login";
import {FormHeader, SideBanner} from "./components";

const Login = ({user, login}) => {
  const history = useHistory();

  const [reminderText, setReminderText] = useState("Need to register?");
  const [registerButtonText, setRegisterButtonText] = useState("Register");
  const [registerLink, setRegisterLink] = useState('/register');

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;
    await login({username, password});
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <Box>
      <Grid container>
        <Grid item md={5}> <SideBanner/> </Grid>
        <Grid item xs={12} md={7}>
          <FormHeader
            text={reminderText}
            buttonText={registerButtonText}
            href={registerLink}
            buttonStyle={{width: 170}}/>
          <LoginForm handleLogin={handleLogin}/>
        </Grid>
      </Grid>
    </Box>
  );
};


export default Login;
