import  Express  from "express";
const router= Express.Router()
import {registerUser,loginUser,currentUser} from "../controler/userController.js"
import { validateToken } from "../middleware/validateTokenHandler.js";

router.post("/register",registerUser)
router.post("/login",loginUser)
router.post("/current",validateToken,currentUser)

export default router