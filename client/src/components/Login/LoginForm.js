import {Box, Button, FormControl, Input, InputAdornment, Typography} from "@mui/material";
import * as commonStyle from "../../styles/common";
import React from "react";

const LoginForm = ({handleLogin}) => {

  return (
    <>
      <Box style={commonStyle.formContainer}>
        <Box style={commonStyle.formBox}>
          <Typography style={commonStyle.formTitle}>Welcome back!</Typography>
          <form onSubmit={handleLogin}>
            <FormControl fullWidth required>
              <Typography style={commonStyle.formText}>E-mail address</Typography>
              <Input name="username" type="text" fullWidth autoFocus style={commonStyle.formInput} sx={commonStyle.inputStyle}/>
            </FormControl>
            <FormControl fullWidth required>
              <Typography style={commonStyle.formText}>Password</Typography>
              <Input name="password" type="password" fullWidth style={commonStyle.formInput} sx={commonStyle.inputStyle} endAdornment={
                <InputAdornment position={'end'}>
                  <Button style={{position: 'absolute', right: 0, textTransform: 'none'}}>Forgot?</Button>
                </InputAdornment>
              }/>
            </FormControl>
            <Box style={commonStyle.buttonBox}>
              <Button variant="contained" style={commonStyle.blueButton} type="submit">Login</Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  )
}


export default LoginForm;
