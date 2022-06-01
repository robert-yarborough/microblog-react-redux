import React, { Fragment } from 'react';
import { Avatar, Typography } from '@mui/material';
import UserList from './UserList';
import getAvatarTitle from '../helpers/getAvatarTitle';


function Profile({ user, followingList, followersList }){
  return (
    <Fragment>
      <Avatar alt={user.name}>
        {getAvatarTitle(user.name)}
      </Avatar>
      <Typography variant='h5' gutterBottom>
        {user.name}
      </Typography>
      <Typography variant='subtitle1' gutterBottom>
        {user.email}
      </Typography>
      <Typography variant='h6'>
        {followingList.length} Following
      </Typography>
      <UserList users={followingList} />
      <Typography variant='h6'>
        {followersList.length} Followers
      </Typography>
      <UserList users={followersList} />
    </Fragment>
  )
}
export default Profile;