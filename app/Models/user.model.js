const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    title: String,
    first_name: String,
    last_name: String,
    email: String,
    mobile_code : String,
    phone: String,
    password: String,
    mobile_number_verified: {
      type: String,
      enum : ['0','1'],
      default: '0'
  },
    status: {
      type: String,
      required: false,
      default: 'inactive'
    },
    is_verified: { type: String, default: '0' },
    token:{ type: String, required: false},
    // roles: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Role"
    //   }
    // ]
  })
);

module.exports = User;