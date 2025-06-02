const mongoose = require("mongoose");

// Schema - structure to document
// model - constructor - CRUD operations on Document


// Data Modeling

//github/hb99960/backendRevision
// code, whiteboard notes, interview questions 

const userSchema = new mongoose.Schema({
    name:String,
    marks:Number
})

const userModel = new mongoose.model("User", userSchema);
module.exports = userModel;