import User from "../models/user.js"
import jwt from "jsonwebtoken"
import { generateToken } from "../../ultis/token.js";

export const registerUser = async(req,res) =>{
  const {name,email,password,rol}=req.body; //confirmPassword
  console.log("Si entré a la ruta del back! estoy en 'registerUser', req.body es: ", req.body);
  try{
    let user = await User.findOne({email})
    if(user) return res.status(400).json({err: "existing user"})
    /* if(password !== confirmPassword) return res.status(400).json({err: "passwords don'tmatch"}) */
    /* encripta el pass */
    user = new User({name,email,password,rol})
    //user.email_Welcome()
    await user.save();
    const token = generateToken(user._id)
    return res.status(200).json({user, token})
  }catch(error){
    console.log(error)
    return res.json({err: "Server error on registerUser."})
  }  
}

export const getUser = async(req,res) =>{
  try{
    const user=await User.find()
    if(!user){
      return res.status(400).json({
        msg:"No hay usuarios para mostrar"
      })
    }
    return res.status(200).json({
      user
    })
  }catch(e){
    console.log(e)
  }
}