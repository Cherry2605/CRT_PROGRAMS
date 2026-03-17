const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  education: String,
  skills: String,
  experience: String,
  resume: String
});

module.exports = mongoose.model("User", UserSchema);