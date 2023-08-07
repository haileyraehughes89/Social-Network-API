const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^.+@.+\..+$/, "Is not an email address"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
userSchema
  .virtual("friendCount")

  .get(function () {
    return this.friends.length;
  });

userSchema
  .virtual("thoughtCount")

  .get(function () {
    return this.thoughts.length;
  });
const User = model("User", userSchema);

module.exports = User;
