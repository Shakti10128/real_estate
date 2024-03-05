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