import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar:{type:String,default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fprofile-image&psig=AOvVaw3_ErjT9TrHKRAAQvNLljPn&ust=1713111431080000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDbpL_Lv4UDFQAAAAAdAAAAABAE"}
}, { timestamps: true });

const User = mongoose.model("Users", userSchema);
export default User;
