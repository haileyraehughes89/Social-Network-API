// const reactionSchema = new Schema({
//   reactionId: {
//     type: Schema.Types.ObjectId,
//     ref: "reaction",
//     default: new ObjectId(),
//   },
//   reactionBody: {
//     type: String,
//     required: true,
//     maxlength: 280,
//   },
//   username: {
//     type: String,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

const { Schema, model } = require("mongoose");

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

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
