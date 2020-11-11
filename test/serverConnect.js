const MongoClient= require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/skyscanner";
//create db and connect to it 
// MongoClient.connect(url,{ useUnifiedTopoplogy: true},function(err,db){
//     if(err) throw err;
//     console.log("Database Created!!!");
//     db.close();
// });
// another method using promise to connect
MongoClient.connect(url,{useUnifiedTopology:true})
.then(client => console.log("DB connected"))
.catch(error => console.log(error))


