import express from 'express';
import User from "../models/user.js"
import {generateToken} from '../../ultis/token.js'

const router = express.Router()

export const login = async(req,res)=>{
    const {email, password} = req.body
    try{
      let user = await User.findOne({email})
      if(!user) return res.json({err: "not found user"})
      const passwordCandidate = await user.comparePassword(password)
      if(!passwordCandidate) return res.json({err:"invalid credential"})
      
      //token
      const {token, expiresIn} = generateToken(user.id)
     
      return res.header('auth-token', token).json({
        error: null,
        data: {token, expiresIn} 
    })
  
    }catch(error){
      console.log(error)
      return res.json({error: "Error server"})
    }
  }


//prueba
 export const prueba = async(req,res)=>{
    const requ = {user: req.user}
    const user = await User.findById(req.uid)
    console.log("estoy en prueba",user)
    return res.json(user)
  }