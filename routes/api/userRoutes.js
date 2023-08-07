const router = require("express").Router();
const { getUsers } = require("../../controllers/userControllers");

// /api/students
router.route("/").get(getUsers);

module.exports = router;
