//const express = require("express");
//const app = express();

//app.listen(5000, () => {
  //  console.log("app is running on port no. successfully.....");
//});
//127.0.0.1 is a local host or  loopback adress.


//ye hmara driver port hota haiu yaha pe folw m btana hoga kya hmne kis sey map kiya hai 

const express = require("express");
const app = express();
const mongoose=require("mongoose")
//load config from env file
require("dotenv").config();
const PORT =process.env.PORT || 5000;

const todoRoutes=require("./routes/todos");
//middleware to parse json request body
app.use(express.json());

//import routes for todo api

//ab hamey sbhi routes ko mount karna hai 

//mongodb connect

mongoose.connect("mongodb+srv://priyanshuranakoti2222:priyanshu123@cluster0.610run4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
//mount the todo api routes
app.use("/api/v1",todoRoutes);

//start server 
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});
    

//CONNECT the db
// const dbConnect=require("./config/database");
// dbConnect();


//default routes
app.get("/",(req,res) => {
    res.send("<h1>this is home page </h1>");
});