import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Box, Grid,} from "@mui/material";
import {FormHeader, SideBanner} from "./components";
import {SignupForm} from "./components/Signup";

const Signup = ({user, register}) => {
  const history = useHistory();

  const [formErrorMessage, setFormErrorMessage] = useState({});
  const [reminderText, setReminderText] = useState('Already have an account?');
  const [loginButtonText, setLoginButtonText] = useState('Login');
  const [loginLink, setLoginLink] = useState('/login');

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({confirmPassword: 'Passwords must match'});
      return;
    }
    await register({username, email, password});
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Box>
      <Grid container>
        <Grid item md={5}> <SideBanner/> </Grid>
        <Grid item xs={12} md={7}>
          <FormHeader
            text={reminderText}
            buttonText={loginButtonText}
            href={loginLink}
            buttonStyle={{width: 140}}/>
          <SignupForm handleRegister={handleRegister} formErrorMessage={formErrorMessage}/>
        </Grid>
      </Grid>
    </Box>);
};

export default Signup;
