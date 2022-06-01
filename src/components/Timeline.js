import React, { Fragment } from 'react';

import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar/ListItemAvatar';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction/ListItemSecondaryAction';
import Avatar from '@mui/material/Avatar/Avatar';
import IconButton from '@mui/material/IconButton/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider/Divider';

import getAvatarTitle from '../helpers/getAvatarTitle';

function Timeline({ posts }){
  return (
    <List>
      {
        posts.map((post) => (
          <Fragment key={post.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={post.userName}>
                  {getAvatarTitle(post.userName)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={post.title}
                secondary={post.content}/>
              <ListItemSecondaryAction>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </Fragment>
        ))
      }
    </List>
  );
}

export default Timeline;