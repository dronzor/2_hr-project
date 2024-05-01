import asyncHandler from "express-async-handler";
import { User } from "../models/userModels.js";
import  bcrypt  from "bcrypt";
//@desc Register a user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const userAvailable= await User.findOne({email})
    if(userAvailable){
        res.status(400)
        throw new Error("email already exist");
    }

    //hash password
    const hashedPassword= await bcrypt.hash(password,10)
    console.log("Hashed password:",hashedPassword);
    const user= await User.create(
      {
        username,
        email,
        password:hashedPassword,
      }
    )
    console.log(`user created ${user}`);
    if (user){
      res.status(201).json({_id:user.id,email:user.email})
    }else{
      res.status(400)
      throw new Error("user data not valid")
    }
    res.json("reg user")
})

//@desc Register a user
//@route POST /api/users/register
//@access public
const loginrUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("login");
    }
    res.json("login user")
})
//@desc Register a user
//@route POST /api/users/register
//@access public
const currentUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    res.json("current user")
})

export {registerUser,loginrUser,currentUser}