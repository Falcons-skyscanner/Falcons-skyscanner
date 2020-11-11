const express = require("express");
bodyParser= require('body-parser');
let app = express();

app.listen(3000, function(){
    console.log("Server  Started lestning on 3000");
});

app.get("/", (req,res)=>{
    res.sendFile(__dirname +"/index.html");
})
app.post("/userInfo", function(req,res){
    console.log("Hello RBK")
})