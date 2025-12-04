import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
export const signup = async (req, res, next) => {
  // Signup logic will go here
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }  
}

export const signin = async (req, res, next) => {
  // Signin logic will go here
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(404, 'User not found'));
    }
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return next(errorHandler(401, 'Invalid Credentials'));
    }
    const {password:pass,...rest} = user._doc;
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
  }
  catch (error) {
    next(error);
  }
  
}