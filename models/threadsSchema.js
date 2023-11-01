import mongoose from "mongoose";

const threadsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minLength: [10, 'Minimum Title length should be 10'],
        maxLength: [100, `Maximim character length can't exceeds 100 character.`]
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    views : {
        type : Number,
        default : 0
    },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comments: [{ 
        type: String,
         author: { type: mongoose.Schema.Types.ObjectId,  ref: 'User' }
     }],
     createdAt : {
        type : Date,
        default : Date.now,
     }
})

const thread = mongoose.models.Thread || mongoose.model("Thread" , threadsSchema);
export default thread;