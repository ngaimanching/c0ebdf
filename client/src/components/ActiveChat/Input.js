import React, {useState} from 'react';
import {FormControl, FilledInput} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import smileSVG from '../../assets/images/ic-smiles.svg';
import fileSVG from '../../assets/images/ic-file.svg';
import {UploadImageDialog} from "../Dialog";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: '#F4F6FA',
    borderRadius: 8,
    marginBottom: 20,
  },
  smile_icon: {
    position: 'absolute',
    right: '11.33%',
    width: 22,
    height: 22,
    marginTop: 24,
  },
  file_icon: {
    position: 'absolute',
    right: '5%',
    width: 18,
    height: 20.84,
    marginTop: 25,
  },
}));

const Input = ({otherUser, conversationId, user, postMessage}) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
    };
    await postMessage(reqBody);
    setText('');
  };

  const dialogOpen = () => {
    setOpenDialog(true);
  }

  const dialogClose = () => {
    setOpenDialog(false);
  };

  const handleFile = async (event) => {
    dialogClose();
    const post_url = 'https://api.cloudinary.com/v1_1/dkei6g0z1/image/upload'
    const uploads = []
    for (let i = 0; i < event.target.files.length; i++) {
      const formData = new FormData();
      formData.append('file', event.target.files[i]);
      formData.append('upload_preset', 'my-upload-images');
      uploads.push(fetch(post_url, {
          method: 'POST',
          body: formData,
        },
      ));
    }
    const attachments = await Promise.all(uploads.map(async (upload) => {
      let resp = await upload;
      let data = await resp.json()
      return data['secure_url'];
    }));

    const reqBody = {
      text: '',
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: attachments,
    };
    await postMessage(reqBody);
    setText('');
  };


  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <UploadImageDialog open={openDialog} onClose={dialogClose} handleFile={handleFile}/>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{root: classes.input}}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
        />
        <img src={smileSVG} alt="smile" className={classes.smile_icon}/>
        <img src={fileSVG} alt="file" className={classes.file_icon} onClick={dialogOpen}/>
      </FormControl>
    </form>
  );
};

export default Input;
