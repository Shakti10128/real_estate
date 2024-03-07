import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
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


export const signIn = async(req,res)=>{
    const {email,password} = req.body;
    try {
        // validate the data
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        // check if user exist or not
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"User not registered"
            })
        }
        
        // check the user password mathced or not
        if(await bcrypt.compare(password,user.password)){
            // generate the token 
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{
                expiresIn:'5day',
            })

            // make user password undefined
            user.password = undefined;
            return res.cookie("token",token,{httpOnly:true}).status(200).json({
                success:true,
                message:`Welcome back ${user.username}`,
                userData:user
            })
        }
        // password not matched
        else{
            return res.status(400).json({
                success:false,
                message:"User not registered"
            })
        }
    } catch (error) {
        console.log("Login error");
        return error.message;
    }
}