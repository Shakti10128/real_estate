import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

const app = express();
app.use(express.json());

// Routes import 
import userRouter from './routes/userRoute.js';

// using Routes
app.use('/api/auth',userRouter);


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Database connected successfully");
})
.catch((error)=>{
    console.log("error to connecting the Database",error.message);
})


app.listen(3000,()=>{
    console.log("server is running on PORT: ",3000)
})

// error handler 
app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";

    return res.status(statusCode).json({
        success:false,
        statusCode:statusCode,
        message:message
    });
})