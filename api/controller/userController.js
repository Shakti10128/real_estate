import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'


export const signUp = async(req,res,next)=>{
    const {username,email,password} = req.body;

    try {
        // validate the data
        if(!username || !email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        // check if user alredy exist or not
        const user = await User.findOne({email});
        if(!user){
                // bcrypting the password
            const hashPassword = await bcrypt.hash(password,10)
            
            // creating the new user
            const newUser = new User({username,email,password:hashPassword});

            // save the new user in db
            await newUser.save();

            // return the response
            return res.status(201).json({
                success:true,
                message:"User created successfully",
            })
        }
        else{
            return res.status(400).json({
                success:false,
                message:"User already exist"
            })
        }
    } catch (error) {
        console.log("signUp error ");
        next(error);
    }
}