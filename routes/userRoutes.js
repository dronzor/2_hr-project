import  Express  from "express";
const router= Express.Router()
import {registerUser,loginrUser,currentUser} from "../controler/userController.js"

router.post("/register",registerUser)
router.post("/login",loginrUser)
router.post("/current",currentUser)

export default router