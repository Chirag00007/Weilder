import mongoose from "mongoose";

const schema =  new mongoose.Schema({
    name : String,
    price : Number
})

mongoose.models = {};

export const Product = mongoose.model("Product" , schema)