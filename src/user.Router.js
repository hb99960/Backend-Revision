/**
 * 
 * I'll keep all the routes or APIs related to users in single file
 */

const express = require("express");
const router = express.Router();
const userModel = require("./user.Model");

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/backendRevisionDB")
.then(() => console.log("MongoDB connected"))
.catch(() => console.error("MongoDB connection failed"));

router.use((req, res, next) => {
    console.log(`Router level middleware`);
    next();
})

const users = [{id:1, name:"Masai"}];

// Endpoint - to get all the users
router.get("/", async (req, res) => {

    // res.json(users);

    let allUsers = await userModel.find();
    res.json(allUsers);
})

// Frontend = Postman (API testing tool)

// Endpoint - To add the users
router.post("/", (req, res)=>{
    console.log(req.body);
    // result = check if user existed or not
    // t -> User existed
    // F ->
    const newUser = {id: users.length + 1, ...req.body};
    users.push(newUser);
    res.status(200).json(users);
})


// search user by name 
// query params

router.get("/search", (req, res) => {
    const {name} = req.query;
    console.log(name);
    let filteredUsers = users;
    if(name){
        filteredUsers = filteredUsers.filter(user => user.name
                                                        .toLowerCase()
                                                        .includes(name.toLowerCase()));
        res.status(200).json(filteredUsers);
    } else{
        res.status(404).json({message: "Invlaid name"})
    }
})


// updating
// req.body, req.params, req.query
// dot operator : to access V or F
// path params - dynamic route
router.put("/:id", (req, res) => {
    const userId = req.params.id;
    console.log(userId);
    const user = users.find( user => user.id ==userId);
    if(user){
        user.name = req.body.name;
        res.status(200).json(user);
    } else{
        res.status(400).json({message : "Incorrect user id"})
    }
})


// delete
//path params - dynamic route
router.delete("/:id", (req, res)=> {
    const userId = req.params.id;
    console.log(userId);
    const userIndex = users.findIndex(user => user.id == userId);

    if(userIndex == -1){
        // user does not exist
        res.status(404).json({message:"User does not exist"});
    } else{
        // [a,b,c,d,e]
        // index = 2
        // splice
        users.splice(userIndex,1);
        res.status(200).json({message:"User deleted successfully", result:users})
    }
})

module.exports = router;