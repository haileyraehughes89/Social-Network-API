const { ObjectId } = require("mongoose").Types;
const Users = require("../models/User");

module.exports = {
  async getUsers(req, res) {
    try {
      const users = await Users.find();

      const userObj = {
        users,
      };

      res.json(userObj);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
};
