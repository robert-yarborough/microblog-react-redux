import React, { Fragment } from 'react';

import UserSearch from './UserSearch';
import UserList from './UserList';

function Users({ users }){
  return (
    <Fragment>
      <UserSearch onSearch={console.log}/>
      <UserList users={users}/>
    </Fragment>
  )
}
export default Users;