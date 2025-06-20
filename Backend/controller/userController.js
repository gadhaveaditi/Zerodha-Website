require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { UserModel } = require("../model/userModel.js");

module.exports.register = async(req, res) => {
    try {
      const {username, name, email, password } = req.body;

      const existingUser = await UserModel.findOne({ email });
      if(existingUser) {
          return res.status(400).json({message : "user already exists"});
      }

      const hashPassword = await bcrypt.hash(password, 10);

      const newUser = new UserModel({ 
          name, 
          username,
          email, 
          password: hashPassword 
      });

      await newUser.save();
      res.status(201).json({message : "User registered Succesfully"});
    } catch (err) {
      return res.status(500).json({message : error.message});
    }

}

module.exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await UserModel.findOne({ email });
      if(!user) {
          return res.status(400).json({ message : "Invalid email or password" });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if(!isMatch) {
          return res.status(400).json({ message : "Invalid email or password" });
      }

      const token = jwt.sign({ id : user._id }, process.env.JWT_SECRET);

      res.json({ token, user : { id : user._id, name : user.name, email : user.email }});
    } catch (err) {
      return res.status(500).json({message : error.message});
    }
}