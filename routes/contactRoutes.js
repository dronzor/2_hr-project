import  Express  from "express";
const router=Express.Router()
import { getController,postController,putController,deleteController } from "../controler/contactController.js"; //use of controller

router.route("/").get(getController)

router.route("/").post(postController)

router.route("/:id").put(putController)

router.route("/:id").delete(deleteController)

export default router