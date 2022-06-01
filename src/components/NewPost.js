import React, { useState } from 'react';
import {FormControl, FormGroup, TextField, Button, Box } from '@mui/material';

function NewPost({ addPost }){
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  console.log('content', content);

  function submitForm(){
    const post = {
      title,
      content
    };
    addPost(JSON.stringify(post));
  }
  return (
    <form action="">
      <FormGroup>
        <FormControl>
          <TextField
            label="Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
      </FormGroup>
      <FormGroup>
        <TextField
          label="Share your thoughts"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          multiline
          rows={4} />
      </FormGroup>
      <Box mt={1}>
        <Button
          variant="contained"
          color="primary"
          onClick={submitForm}>Post</Button>
      </Box>
    </form>
  );
}
export default NewPost;