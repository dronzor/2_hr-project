import  Express  from "express";
import dotenv from "dotenv"
import router from "./routes/contactRoutes.js"
import router1 from "./routes/userRoutes.js"
import {errorhandler}  from "./middleware/errorHandler.js";
import { connectDb } from "./config/dBconnection.js";
dotenv.config()

connectDb()
const app=Express()

app.use(Express.json())
app.use("/api/contact",router)
app.use("/api/users",router1)
app.use(errorhandler)

app.listen(process.env.PORT,()=>{
    console.log(`port listening on ${process.env.PORT}`);
})