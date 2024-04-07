import { errorHandler } from '../Utils/error.js';
import User from '../model/user.model.js';
import bcrypt from 'bcryptjs';
import  jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json('User created successfully!');
  } catch (error) {
    next(error);
  }
};
export const signin = async (req, res, next) => {
  const{email, password} = req.body;
  try {
    const validUser = await User.findOne({ email });
    if( !validUser)return next(errorHandler(404,'User not found'))
    const validPass= bcrypt.compareSync(password, validUser.password)
    if(! validPass) return next(errorHandler(401,'Wrong Credentials !'));
    const token =jwt.sign({_id : validUser._id}, process.env.JWT_SECRET )
    res.cookie('token', token , { httpOnly: true })
    .status(200)
    .json({validUser})
  } catch (error) {
    next(error)
  }
}