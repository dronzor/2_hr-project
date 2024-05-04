//controller have all teh logic written of routes
import AsyncHandler from "express-async-handler";
import { Contact } from "../models/contactModel.js";
//description- get all contacts
//@route GET api/contact
const getContact=AsyncHandler(async(req,res)=>{
    const contacts = await Contact.find({user_id:req.user.id});
    if (!contacts) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contacts);
})

//description- create all contacts
//@route post api/contact
const postContact=AsyncHandler(async(req,res)=>{
    console.log(`the req body is `,req.body);
    const {name,email,phone}= req.body
    if (!name || !email || !phone){
        res.status(404)
        throw new Error("all field is mandatory");
    }
     const contact=await Contact.create({
        name,
        email,
        phone,
        user_id:req.user.id
     })
    res.status(200).json(contact);
})

//description- update all contacts
//@route put api/contact/:id
const putContact=AsyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString()!== req.user_id){
        res.status(403);
        throw new error("user dont have permission to update another user contact")
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
const deleteContact=AsyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    if(contact.user_id.toString()!== req.user_id){
        res.status(403);
        throw new error("user dont have permission to delete another user contact")
    }
    await Contact.deleteOne()
    res.status(200).json(contact);
})

export {getContact,postContact,putContact,deleteContact}