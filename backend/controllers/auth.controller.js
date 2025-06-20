import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import generateTokenSetCookie from '../utils/generateTokenSetCookie.util.js';

export const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User with that name already exists" });
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt); 

        // create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        // save new user first
        await newUser.save();

        // generate JWT token & set cookie
        generateTokenSetCookie(newUser._id, res);

        // respond with user info (without password)
        res.status(201).json({
            _id: newUser._id,
            username: newUser.username,
            email: newUser.email
        });

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error: error.message });
    }
};

export const logIn = async (req, res) =>{
    try{
        const {username,password} = req.body;

        const user = await User.findOne({username});
        const isPassCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPassCorrect){
            return res.status(400).json({error:"Invalid login credentials"});
        }

        // generate jwt cookie
        generateTokenSetCookie(user._id, res);
        
        res.status(200).json({
            _id: user._id,
            username: user.username,
        })

    }catch(error){
        res.status(500).json({error:"Internal server error: log in module"});
    }
}

export const logOut = async (req, res) =>{
    try{
       res.cookie('jwt',"",{maxAge: 0});
       res.status(200).json({message: "Logged out succesfully"});

    }catch(error){
        res.status(500).json({error:"Error at logOut module"})
    }
}