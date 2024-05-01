import asyncHandler from "express-async-handler";
import { User } from "../models/userModels.js";
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