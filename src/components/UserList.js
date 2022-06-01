import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Avatar
} from '@mui/material';


import getAvatarTitle from '../helpers/getAvatarTitle';

function UserList({ users, follow, unfollow }){
  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id}>
          <ListItemAvatar>
            <Avatar alt={user.name}>
              {getAvatarTitle(user.name)}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={user.name} />
          <ListItemSecondaryAction>
            <IconButton
              onClick={() => unfollow(user.id)}>

            </IconButton>
            <IconButton
              onClick={() => follow(user.id)}>

            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}
export default UserList;