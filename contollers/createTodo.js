//todo type ka ek object bnao or use db m dalo is cretetodo m uska logic hoga controller define karne hongey hmey har path k liye diffrent contoller banega..
//so hame todo kas schema pata hona chahiye jo ki define hai models ki todo.js m ..


//import the model
const todo = require("../models/todo");

// define route handler
//so agr hm yaha contoller tk aye hai to definetely hm kisi route pr hit karein hongey , ye controller kiasi path ya route sey map hai so jb hm us path ya route pr hit karey hongety tbhi yaha tk pahunchey hai so jis routew sey hm yaha tk pahunchey hai uskey liye route handler likhna padhega ..
//jesey kisi event pe hm click kartey hai to uskey liye hm event listener likhtey hai vesey hi hamey yaha routehandler likhna padta hai its compulsary..
exports.createTodo = async(req,res) =>{
    try{
        //extract or fetch  tittle and description from request body
        const{title,description} = req.body;// destructuring..

        //crete todo object and insert in db ..
        const response= await todo.create({title,description});
        // send a json response with a success flag.
        res.status(200).json({
            success:true,
            data:response,
            message:'enter succesfuuly'
        })

    }
    catch(err){


        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error ",
            message:err.message,
        })
    }
}


//async function kyu bnaya...?
//hm ni chchtey ki hmnara main thread wait karey,kbhi bhi main thread k upr network call ni karte hai ek bada rule hai ye
//usi prakar sey jn hm db connection ya interaction k time hm async func. ka uase kartey hai so that yr main thread k sath collapse na karey or hmarey baki k code afect na ho

