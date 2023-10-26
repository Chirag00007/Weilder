import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : [true, "Email should be unique!"]
    },
    image : {
        type : String
    },
    role : {
        default : 'user',
        type : String
    },
    threads : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Threads'
    }]
})

const user = mongoose.models.User || mongoose.model("User" , userSchema);
export default user;