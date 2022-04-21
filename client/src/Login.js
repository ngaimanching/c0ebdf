import React, {useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';
import {Typography, Box, Grid, Button, Input, InputAdornment, FormControl} from "@mui/material";
import background from "./assets/images/bg-img.png";
import chatSvg from "./assets/images/bubble.svg";
import {inputStyle} from "./styles/common";

const Login = ({user, login}) => {
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;
    console.log(username, password);
    await login({username, password});
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <Box>
      <Grid container>
        <Grid item md={5} style={styles.left}>
          <img src={chatSvg} alt="chat" style={styles.chatBubble}/>
          <Typography style={styles.adText}>Converse with anyone with any language</Typography>
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid container style={styles.formContainer}>
            <Typography style={styles.createText}>Need to register?</Typography>
            <Link href="/register" to="/register">
              <Button variant="contained" style={styles.createButton}>Create account</Button>
            </Link>
            <Box style={styles.form}>
              <Typography style={styles.welcomeText}>Welcome back!</Typography>
              <form onSubmit={handleLogin}>
                <FormControl fullWidth required>
                  <Typography style={styles.formText}>E-mail address</Typography>
                  <Input name="username" type="text" fullWidth autoFocus style={styles.formInput} sx={inputStyle}/>
                </FormControl>
                <FormControl fullWidth required>
                  <Typography style={styles.formText}>Password</Typography>
                  <Input name="password" type="password" fullWidth style={styles.formInput} sx={inputStyle} endAdornment={
                    <InputAdornment position={'end'}>
                      <Button style={{position: 'absolute', right: 0, textTransform: 'none'}}>Forgot?</Button>
                    </InputAdornment>
                  }/>
                </FormControl>
                <Box style={styles.loginButtonBox}>
                  <Button variant="contained" style={styles.loginButton} type="submit">Login</Button>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

const styles = {
  left: {
    height: "100vh",
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    justifyContent: 'center',
  },
  chatBubble: {
    position: 'absolute',
    top: 'calc(50% - 100px)',
    height: 66,
    width: 67,
    borderRadius: 0
  },
  adText: {
    position: 'absolute',
    width: 300,
    height: 80,
    top: 'calc(50% - 80px/2 + 53px)',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '26px',
    lineHeight: '40px',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  createButton: {
    position: 'absolute',
    top: 30,
    right: 42,
    width: 170,
    height: 54,
    radius: 5,
    borderWidth: 1,
    borderColor: '#979797',
    background: "#FFFFFF",
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
    color: "#3A8DFF",
    textTransform: 'none',
  },
  createText: {
    position: 'absolute',
    top: 46,
    right: 242,
    fontFamily: 'Open Sans',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "19px",
    textAlign: "center",
    color: "#B0B0B0",
    marginRight: "20px",
  },
  formContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '70%',
  },
  welcomeText: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '26px',
    lineHeight: '40px',
    color: '#F000000',
  },
  formText: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '19px',
    color: '#B0B0B0',
    marginTop: 33
  },
  formInput: {
    marginTop: 16,
    fontFamily: 'Open Sans',
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '19px',
  },
  loginButtonBox: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: 60
  },
  loginButton: {
    width: 160,
    height: 56,
    radius: 3,
    backgroundColor: '#3A8DFF',
    textTransform: 'none',
  }
}

export default Login;
