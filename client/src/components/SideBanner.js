import React, {useState, useEffect} from 'react';
import {Box, Typography} from "@mui/material";
import background from "../assets/images/bg-img.png";
import chatSvg from "../assets/images/bubble.svg";


const SideBanner = (props) => {
  const [advertisementText, setAdvertisementText] = useState("Converse with anyone with any language");
  return (
    <>
      <Box style={styles.container}>
        <img src={chatSvg} alt="chat" style={styles.chatBubble}/>
        <Typography style={styles.adText}>{advertisementText}</Typography>
      </Box>
    </>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `linear-gradient(180deg, #3A8DFF 0%, #86B9FF00 100%), url(${background})`,
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
}

export default SideBanner;
