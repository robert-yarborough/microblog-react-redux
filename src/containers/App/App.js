import React from 'react';
import {Container} from '@mui/material';
import Users from '../../components/Users';
import Timeline from '../../components/Timeline';
import NewPost from '../../components/NewPost';


const posts = [
  {
    "title": "How to make...",
    "content": "something...",
    "userId": 1,
    "userName": "John Doe",
    "id": 1
  }
];

const users = [
  {
    "email": "jdoe@email.com",
    "password":"$xx..",
    "name": "John Doe",
    "id": 1
  },
  {
    "email": "bjackson@email.com",
    "password": "$dd..",
    "name": "Bo Jackson",
    "id": 2
  },
  {
    "email": "mjackson@email.com",
    "password": "%df..",
    "name": "Michael Jackson",
    "id": 3
  }
];

function App() {
  return (
    <Container>
      <Users users={users}/>
      <Timeline posts={posts} />
      <NewPost addPost={console.log} />
    </Container>
  );
}

export default App;
