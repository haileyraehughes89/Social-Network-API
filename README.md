NoSQL: Social Network API

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Description:
A social network API that allows users to create accounts, post thoughts, react to thoughts, and build a network by adding friends. Built with Node.js, Express.js, MongoDB, and Mongoose.

## Running the app:
In you terminal enter the command "npm run dev". This will automaticaly seed the existing data and initialize the server.

## API Endpoints:

###For Users:
GET /api/users - json response of all users
GET /api/users/:userId - json response of selected user using the user's id.
POST /api/users - Create a new user
PUT /api/users/:userId - Update a user by id
DELETE /api/users/:userId - Delete a user by id
POST /api/users/:userId/friends/:friendId - Add a friend to a user
DELETE /api/users/:userId/friends/:friendId - Delete a friend from a user

###For Thoughts:
GET /api/thoughts - json response of all thoughts
GET /api/thoughts/:thoughtId - json response of selected thought using the thought's id.
POST /api/thought - Create a new thought
PUT /api/thoughts/:thoughtId - Update a thought by id
DELETE /api/thoughts/:thoughtId - Delete a thought by id
POST /api/thoughts/:thoughtId/reactions/:reactionId - Add a reaction to a thought
DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Delete a reaction from a thought

