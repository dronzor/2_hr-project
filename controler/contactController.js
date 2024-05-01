//controller have all teh logic written of routes
import AsyncHandler from "express-async-handler";
import { Contact } from "../models/contactModel.js";
//description- get all contacts
//@route GET api/contact
const getController=AsyncHandler(async(req,res)=>{
    const contacts = await Contact.find({ user_id: req.user.id });
    if (!contacts) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contacts);
})

//description- create all contacts
//@route post api/contact
const postController=AsyncHandler(async(req,res)=>{
    console.log(`the req body is `,req.body);
    const {name,email,id}= req.body
    if (!name || !email || !id){
        res.status(404)
        throw new Error("all field is mandatory");
    }
     const contact=await Contact.create({
        name,
        email,
        id
     })
    res.status(200).json(contact);
})

//description- update all contacts
//@route put api/contact/:id
const putController=AsyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    const updateContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updateContact);
})

//description- delete all contacts
//@route delete api/contact/:id
const deleteController=AsyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.deleteOne()
    res.status(200).json(contact);
})

export {getController,postController,putController,deleteController}