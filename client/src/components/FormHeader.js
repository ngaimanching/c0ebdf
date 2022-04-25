import React, {useState, useEffect} from 'react';
import {Box, Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const FormHeader = (props) => {

  const buttonStyle = props.buttonStyle ? props.buttonStyle : {};

  return (
    <>
      <Box style={styles.container}>
        <Typography style={styles.text}>{props.text}</Typography>
        <Link to={props.href} style={{textDecoration: 'none'}}>
          <Button variant="contained" style={{...styles.button, ...buttonStyle}}>{props.buttonText}</Button>
        </Link>
      </Box>
    </>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 30,
    paddingRight: 42
  },
  button: {
    width: 140,
    height: 54,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#979797',
    background: "#FFFFFF",
    boxShadow: "0px 2px 12px rgba(74, 106, 149, 0.2)",
    color: "#3A8DFF",
    textTransform: 'none',
  },
  text: {
    fontFamily: 'Open Sans',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "19px",
    textAlign: "center",
    color: "#B0B0B0",
    marginRight: 30
  },
}

export default FormHeader;
