const express = require("express");
const bodyParser= require('body-parser');

let app = express();

//make sure that body parser work befor CRUD building
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req,res)=>{
    res.sendFile(__dirname +"/index.html");
});
app.post("/userInfo", function(req,res){
    console.log(req.body)
});

app.listen(3000, function(){
    console.log("Server  Started lestning on 3000");
});