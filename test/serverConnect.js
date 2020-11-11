const MongoClient= require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/greenField";
//create db and connect to it 
// MongoClient.connect(url,{ useUnifiedTopoplogy: true},function(err,db){
//     if(err) throw err;
//     console.log("Database Created!!!");
//     db.close();
// });
// another method using promise to connect
let connection= MongoClient.connect(url,{useUnifiedTopology:true})
.then(client =>{
    console.log("DB connected");
    const db=client.db("greenField");
    const userCollection=db.collection("users");
})
.catch(error => console.log(error));


module.exports= connection;
