import mongoose from "mongoose";


let memberSchema = mongoose.Schema({
    name:String,
    phoneNo:Number,
    post:String,
    address:String,
    imageUrl:String
})
let memberModel = mongoose.model("member", memberSchema)
export default memberModel
