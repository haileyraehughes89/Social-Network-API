NoSQL: Social Network API

## Description:
A social network API that allows users to create accounts, post thoughts, react to thoughts, and build a network by adding friends. Built with Node.js, Express.js, MongoDB, and Mongoose.

## Running the app:
In you terminal enter the command "npm run dev". This will automaticaly seed the existing data and initialize the server.

## API Endpoints:

For Users:
```
GET /api/users - json response of all users
GET /api/users/:userId - json response of selected user using the user's id.
POST /api/users - Create a new user
PUT /api/users/:userId - Update a user by id
DELETE /api/users/:userId - Delete a user by id
POST /api/users/:userId/friends/:friendId - Add a friend to a user
DELETE /api/users/:userId/friends/:friendId - Delete a friend from a user
```

For Thoughts:
```
GET /api/thoughts - json response of all thoughts
GET /api/thoughts/:thoughtId - json response of selected thought using the thought's id.
POST /api/thought - Create a new thought
PUT /api/thoughts/:thoughtId - Update a thought by id
DELETE /api/thoughts/:thoughtId - Delete a thought by id
POST /api/thoughts/:thoughtId/reactions/:reactionId - Add a reaction to a thought
DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Delete a reaction from a thought
```

Technologies Used:
```
Node.js
Express.js
MongoDB
Mongoose
```


https://github.com/haileyraehughes89/Social-Network-API/assets/127250721/ae294e6a-c30a-44dc-8116-1b1313156cc5


