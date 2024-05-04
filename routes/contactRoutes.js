import  Express  from "express";
const router=Express.Router()
import { deleteContact, getContact, postContact, putContact, } from "../controler/contactController.js"; //use of controller
import { validateToken } from "../middleware/validateTokenHandler.js";

router.use(validateToken)

router.route("/").get(getContact)

router.route("/").post(postContact)

router.route("/:id").put(putContact)

router.route("/:id").delete(deleteContact)

export default router