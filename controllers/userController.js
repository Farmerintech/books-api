import express from"express"
import bcrypt from "bcrypt"
import User from "../models/usersModel.js"
import jwt from "jsonwebtoken"
//Register
export const Register = async(req, res) =>{
    try{
        const{ username, password} = req.body
        const saltRounds = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = await User.create({username, password:hashedPassword})

        res.status(201).json({msg:'New user created', newUser})
    } catch (error) {
        res.status(500).json({msg:error})

    }

}

export const Login = async(req, res) =>{
    try {
        const{ username, password} = req.body
        const user = await User.findOne({username})

        if(!user){
            return res.status(400).json({msg:'Username does not exist'})
        }

        const ispassword = await bcrypt.compare(password, user.password)
        if(!ispassword){
            return res.status(400).json({msg:'Invalid username or password'})
        }
        const token = await jwt.sign({id:user._id}, "iugnrhhloyoher", {
            expiresIn:"3m"
        })
        return res.status(200).json({msg:'Login successful'})
    } catch (error) {
        res.status(500).json({msg:error})

    }
}