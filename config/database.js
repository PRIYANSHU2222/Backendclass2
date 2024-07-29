//so is file ka kaam hai connection ensure karna between hmare database and application.  
// const mongoose =require("mongoose");

// require("dotenv").config();// is statement sey jo bhi hmne env file m define kiya hoga vo sara ka sara load hojayega process object k andr , to ab hmare process object k andr sara data present hai or hm isey fetch kar saktey hai


// const dbConnect = () => {//yaha pr se hm apne process object m sey utha kr layengey hmare database url ko but question ye hai ki url rakha padha hai hmare .env file m , so ye url process object kn andr kesey chla gya isko feed kese kiya hamne so abhi tk hamne isey feed ni kiya to code fat jayega agr is url ko process obj. m feed karna hai to hamey .env library ka use karna hoga to phle indtall karengey by using the command(npm i dotenv) in terminal check line no. 3 of this code ..
//     mongoose.connect(process.env.DATABASE_URL,{
//         useNewUrlParser:true,
//         useUnifiedTopology: true,
//     })
//     .then(() => console.log("connection successfull..."))
//     .catch((error) => {
//         console.log("issue in db connection");
//         console.log(error.message);
//         //iska kya matlab hai
//         process.exit(1);
//     })
// }
// module.exports=dbConnect;//function export karadiya v