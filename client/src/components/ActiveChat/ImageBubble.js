import React from 'react';
import {Box, Grid} from "@mui/material";
import {v4 as uuidv4} from 'uuid';
import {Typography} from "@material-ui/core";

const ImageBubble = ({user, attachments, text}) => {

  const styles = {
    grid: {
      maxWidth: 500,
      display: 'flex',
      justifyContent: user === 'other' ? 'flex-start' : 'flex-end',
    },
    image: {
      width: 150,
      height: "auto",
    },
    other_bubble: {
      backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
      borderRadius: '0 10px 10px 10px',
    },
    sender_bubble: {
      background: '#F4F6FA',
      borderRadius: '10px 10px 0 10px',
    },
    other_text: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#FFFFFF',
      letterSpacing: -0.2,
      padding: 8,
    },
    sender_text: {
      fontSize: 14,
      color: '#91A3C0',
      letterSpacing: -0.2,
      padding: 8,
      fontWeight: 'bold',
    },
  }

  return (
    <>
      <Grid container spacing={4} style={styles.grid}>
        {attachments.map((_, index) => (
          <Grid item sm={6} md={4} key={uuidv4()}>
            <img src={attachments[index]} alt="attachment" style={styles.image}/>
          </Grid>
        ))}
      </Grid>
      {text !== '' && (
        <Box style={user === 'other' ? styles.other_bubble : styles.sender_bubble}>
          <Typography style={user === 'other' ? styles.other_text : styles.sender_text}>{text}</Typography>
        </Box>
      )}
    </>
  );
};

export default ImageBubble;
