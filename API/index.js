import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from './router/user.route.js';
import authRouter from './router/auth.route.js'
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("MongoDB Connected");
}).catch((err) => { console.error(err) });

const app = express();
app.use(express.json());

//Routes

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.use('/api/user', userRouter);
app.use("/api/auth", authRouter)

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
   return res.status(statusCode).json({
    success: false,
    statusCode,
    message
   })
})