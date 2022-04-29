import React from 'react';
import {Grid} from "@mui/material";

const ImageBubble = ({user, attachments}) => {

  const styles = {
    grid: {
      maxWidth: 500,
      display: 'flex',
      justifyContent: user === 'other' ? 'flex-start' : 'flex-end',
    },
    image: {
      width: 150,
      height: "auto",
    }
  }

  return (
    <Grid container spacing={4} style={styles.grid}>
      {attachments.map((_, index) => (
        <Grid item sm={6} md={4} key={index}>
          <img src={attachments[index]} alt="attachment" style={styles.image}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageBubble;
