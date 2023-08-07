const connection = require("../config/connection");
const User = require("../models/User");
const Thought = require("../models/Thought");
const { usersData, thoughtsData } = require("./data");

connection.once("open", async () => {
  console.log("connected");

  let usersCheck = await connection.db
    .listCollections({ name: "users" })
    .toArray();
  if (usersCheck.length) {
    await connection.dropCollection("users");
  }

  let thoughtsCheck = await connection.db
    .listCollections({ name: "thoughts" })
    .toArray();
  if (thoughtsCheck.length) {
    await connection.dropCollection("thoughts");
  }

  const users = [];
  const thoughts = [];
  for (const userData of usersData) {
    const { username, email } = userData;
    users.push({
      username,
      email,
    });
  }

  await User.insertMany(users);

  for (const thoughtData of thoughtsData) {
    const { thoughtText, createdAt, username } = thoughtData;
    thoughts.push({
      thoughtText,
      createdAt,
      username,
    });
  }

  await Thought.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
