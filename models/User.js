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
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }

  // { friends: [{ type: Schema.Types.ObjectId, ref: "User" }] }
);

const User = model("User", userSchema);

module.exports = User;
