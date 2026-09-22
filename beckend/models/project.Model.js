import mongoose from "mongoose";


let projectSchema = mongoose.Schema({
    name:String,
    customerName:String,
    imageUrl:String,
    noets:String,
})
let projectModel = mongoose.model("project", projectSchema)
export default projectModel
