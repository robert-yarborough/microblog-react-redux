import React, { useState } from 'react';

import {
  InputBase,
  IconButton
} from "@mui/material";


function UserSearch({ onSearch }){
  const [text, setText ] = useState('');
  return (
    <form>
      <InputBase
        placeholder="Search Users"
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus
        />
      <IconButton onClick={() => onSearch(text)}>
      </IconButton>
    </form>
  )
}
export default UserSearch;