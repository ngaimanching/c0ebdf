import React, {useState, useRef} from "react";
import {Dialog, DialogContent, DialogTitle, IconButton} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import imgPlaceholder from "../../assets/images/img-placeholder.jpg";

const UploadImageDialog = (props) => {
  const uploadRef = useRef(null);

  const styles = {
    image_placeholder: {
      width: '80%',
      height: 'auto',
      margin: '0 auto',
      display: 'flex',
    }
  }

  return (
    <Dialog open={props.open} maxWidth={'xs'}>
      <DialogTitle style={{alignSelf: 'center'}}>Select image</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={props.onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}>
        <CloseIcon/>
      </IconButton>
      <DialogContent>
        <img src={imgPlaceholder} alt="img" style={styles.image_placeholder} onClick={() => {
          uploadRef.current.click();
        }}/>
        <input type="file" name="images" id="uploadImg" hidden onChange={props.handleFile} multiple ref={uploadRef}/>
      </DialogContent>
    </Dialog>
  )
}

export default UploadImageDialog;
