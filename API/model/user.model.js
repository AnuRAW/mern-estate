import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Username: { type: String, required: true, unique: true },
    email:    { type: String, required: true, unique: true },
    Password: { type: String, required: true, unique: true }
}, { timestamps: true });

const  UserModel=mongoose.model("User",userSchema);
export default UserModel;
