console.log("Revision session!!!");

var checkNum = require("is-even");

var number = "300";
var result = checkNum(number);
console.log(`${number} is Even : ${result}`);
const express = require("express");
const app = express();
const userRoutes = require("./user.Router");


// middleware : req and res
// middleware : app level, router level
// APP (R1, R2, R3)
// function : validation, auth
// routing

// middelware - app level
app.use(express.json());

app.use( (req, res, next) => {
    console.log(`App level middleware -2`);
    next();
})

app.use((req, res, next) => {
    console.log(`App level middleware -1`);
    next();
    // will be passing the control to middleware or routes
})

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} : ${req.method} ${req.url}`);
    next();
})





// Our Data source

const courses = [{id:1, name:"Backend"}]
const mentors = [];

// endpoint
app.get("/", (req, res) => {
    // console.log("Server is running");
    res.json("Server is running");
})

// health-check endpoint
app.get("/health-check", (req, res) => {
    // console.log("Masai server is healthy");
    res.json("Masai server is healthy")
})

app.use("/users", userRoutes);
// app.use("/courses", coursesRoutes);
// app.use("/mentors", mentorRoutes);


// API courses, Mentors


const port = 3003;
app.listen(port, (req, res)=>{
    console.log(`Masai server is running on port ${port}`);
})








/**
 * modules : is-even
 * package : 
 * package-lock :
 * 
 * node-modules :
 * Server
 */

/**
 * Server : http => more lines of code
 * Framework : express.js => easy to create a server
 * Port : software 
 *      ip:port 66k
 * Request
 * Response : Method (Get, Post, Put, Delete) = CRUD
 * CRUD = Create, Read, Update, Delete
 * 
 * Read = Get
 * Create = Post
 * Update = put
 * 
 * endpoint
 * nodemon : node monitor : restart your server after every change
 * 
 * Postman
 * Routing
 * 
 * Middleware
 *  app.use()
 *  
 * 
 * res.json vs res.send
 * 
 * Node.js and Express?
 * Features of Nodejs
 *  - Single threaded but ....
 *  - Event Driven
 *  - Architecture : Event Loop, Callstack, Libuv,...
 *  - If nodejs is single threaded how it is handling multiple-tasks?
 *  
 * Express
 *  - http 
 *  - express
 * 
 *
 */

/**
 * Explanation -> confident
 * 1. Known : Every evaluation : try to explain -> 2/3 -> 1
 * 2. Unknown : Surprise element : -> Connecting the basics
 */