import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar:{type:String,default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fprofile-picture&psig=AOvVaw1OeBJz6901CzUkN-6xBikF&ust=1713345917167000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjzoYG1xoUDFQAAAAAdAAAAABAE"}}
    , { timestamps: true });

const User = mongoose.model("Users", userSchema);
export default User;
