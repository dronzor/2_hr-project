import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"please add the user name"]
    },
    email:{
        type:String,
        required:[true,"please add email address"],
        unique:[true,"email address already taken"]
    },
    password:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})

export const User= mongoose.model("User",userSchema)