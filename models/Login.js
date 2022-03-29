const mongoose = require("mongoose");

const loginScheme = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please give your email"],
    maxLength: [60, "Email cannot be more than 60 characters"],
  },
  password: {
    type: String,
    required: [true, "Please give your password"],
    minLength: [6, "Email cannot be under than 6 characters"],
  },
});

module.exports = mongoose.models.Login || mongoose.model("Login", loginScheme);

console.log(loginScheme);
