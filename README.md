# Microblog React-Redux Toolkit Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## API
Use json-server-auth module to enable a jwt based authentication flow
[https://www.npmjs.com/package/json-server-auth](https://www.npmjs.com/package/json-server-auth)

In terminal run...
`json-server db.json -m ./node_modules/json-server-auth -r routes.json`

### Users API
Register new users and authenticate the existing users

POST /register
POST /login

Example data structure for a saved user

`[
    {
      "email": "robert.yarborough@email.com",
      "password": "...$",
      "name": "Robert",
      "id": 1
    {
]`

Both the login and registration APIs return a response containing a JWT access token that expires in one hour.


`
{
    "accessToken": "xxx.xxx.xxx"
}
`

### Posts API

The posts API permits to create, delete, and get posts.

POST  /posts
DELETE /posts/1
GET /posts

Example: In order to read all the blog posts created by the users with the ids 1 and 2 we should make the following
GET call.

GET /posts?userId=1&userId=2

### Followers API

Add or Delete followers

POST /followers
DELETE /followers/1

`
[
{
  "userId": 2,
  "followerId": 1,
  "id": 1
},
{
  "userId": 1,
  "followerId": 2,
  "id": 2
}
]
`

The userId stores the id of the followed user and followerId keeps track of the follower's id. Each row keeps
a relation between these two users and can be deleted only using the relation id. 

## Components

Define all the components for UI Views.
Install Material UI npm package

Timeline Component

The Timeline Component is a function that takes a list of blog posts and renders HTML markup.

## Validation

## Routing

## Authentication

## Authorization 

## New Post

## Timeline

## Users 

## Follow

## Profile

## Server Errors


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
