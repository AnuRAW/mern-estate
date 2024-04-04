import User from "../model/user.model.js";
import bcrypt from  'bcrypt';

export const signup = async (req, res,next) => {
    const { username, email, password } = req.body;
    const hashedPassword =  await bcrypt.hash(password,  10);
    try{
    const newUser = new User({ username, email, password :  hashedPassword });
    await newUser.save();
    res.status(201).json("User has been created sucessfully");
    }catch(error){
        next(error)
        }
    }

