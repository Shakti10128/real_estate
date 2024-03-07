import mongoose from "mongoose";


const userModel = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://cdn.pixabay.com/photo/2012/04/26/19/43/profile-42914_1280.png"
    }
},{timestamps:true});

const User = mongoose.model("User",userModel);
export default User;