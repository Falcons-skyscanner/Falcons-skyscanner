const express = require("express");
const bodyParser= require('body-parser');
let serverConnct= require("./serverConnect");

let app = express();

//make sure that body parser work befor CRUD building
app.use(bodyParser.urlencoded({extended:true}));


app.get("/", (req,res)=>{
    res.sendFile(__dirname +"/index.html");
});
app.post("/userInfo", function(req,res){
    console.log(req.body);
    
    serverConnct.userCollection.insertOne(req.body)
    .then(result => {
        console.log(result);
    })
    .catch(error => console.log(error));
});

app.listen(3000, function(){
    console.log("Server  Started lestning on 3000");
});