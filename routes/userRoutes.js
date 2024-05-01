import  Express  from "express";
const router= Express.Router()
import {registerUser,loginrUser,currentUser} from "../controler/userController.js"
import { validateToken } from "../middleware/validateTokenHandler.js";

router.post("/register",registerUser)
router.post("/login",loginrUser)
router.post("/current",validateToken,currentUser)

export default router