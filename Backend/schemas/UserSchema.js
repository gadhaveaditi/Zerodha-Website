const { Schema } = require("mongoose");

const UserSchema = new Schema({
  name :{
    type : String,
    required : true
  },
  username: {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  password: {
    type : String,
    required : true
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "order",
    },
  ],
});

module.exports = { UserSchema };