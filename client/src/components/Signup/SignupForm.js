import {Box, Button, FormControl, FormHelperText, Input, Typography} from "@mui/material";
import React from "react";
import * as commonStyle from "../../styles/common";

const SignupForm = ({handleRegister, formErrorMessage}) => {
  return (
    <>
      <Box style={commonStyle.formContainer}>
        <Box style={commonStyle.formBox}>
          <Typography style={commonStyle.formTitle}>Create an account.</Typography>
          <form onSubmit={handleRegister}>
            <FormControl fullWidth required>
              <Typography style={commonStyle.formText}>Username</Typography>
              <Input name="username" type="text" fullWidth autoFocus style={commonStyle.formInput} sx={commonStyle.inputStyle}/>
            </FormControl>
            <FormControl fullWidth required>
              <Typography style={commonStyle.formText}>E-mail address</Typography>
              <Input name="email" type="email" fullWidth style={commonStyle.formInput} sx={commonStyle.inputStyle}/>
            </FormControl>
            <FormControl fullWidth required error={!!formErrorMessage.confirmPassword}>
              <Typography style={commonStyle.formText}>Password</Typography>
              <Input name="password" type="password" inputProps={{minLength: 6}} fullWidth style={commonStyle.formInput} sx={commonStyle.inputStyle}/>
              <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
            </FormControl>
            <FormControl fullWidth required error={!!formErrorMessage.confirmPassword}>
              <Typography style={commonStyle.formText}>Confirm Password</Typography>
              <Input name="confirmPassword" type="password" inputProps={{minLength: 6}} fullWidth style={commonStyle.formInput} sx={commonStyle.inputStyle}/>
              <FormHelperText>{formErrorMessage.confirmPassword}</FormHelperText>
            </FormControl>
            <Box style={commonStyle.buttonBox}>
              <Button variant="contained" style={commonStyle.blueButton} type="submit">Create</Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  )
}

export default SignupForm
