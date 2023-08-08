const { Schema, model } = require("mongoose");
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    ref: "reaction",
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("formattedDate").get(function () {
  const newDate = new Date(this.createdAt);
  let formattedDate = `${newDate.getFullYear()}-`;
  formattedDate += `${`0${newDate.getMonth() + 1}`.slice(-2)}-`; // for double digit month
  formattedDate += `${`0${newDate.getDate()}`.slice(-2)}`; // for double digit day
  return formattedDate;
});
thoughtSchema
  .virtual("reactionCount")

  .get(function () {
    return this.reactions.length;
  });

const Thought = model("Thought", thoughtSchema);
const Reaction = model("Reaction", reactionSchema);

module.exports = { Thought, Reaction };
