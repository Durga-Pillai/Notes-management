import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import User from '../models/user.js'

const JWT_SECRET = process.env.JWT_SECRET;
export const register = async(req,res) => {
    const{name,emil,password} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({name,email,password:hashedPassword});
        res.status(201).json({message:'User registered successfully'}); 
    }catch(err){
        res.sttus(400).json({error:err.message});
    }
}
export const login = async(req,res)=>{
    const{email,password} = req.body;
    try{
        const user = await User.finOne({email});
        if(!user) return res.status(401).json({message:'Invalid email'});

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(401).json({message:'Invalid password'});

        const token = jwt.sign({id:user._id},JWT_SECRET,{expiresIn:'7d'});
        res.json({token, user:{id:user._id,name:user.name,email:user.email}})
    }catch(err){
        res.status(500).json({error:err.message})
    }
}