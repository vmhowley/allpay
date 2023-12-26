var Express = require('express');
var Mongoclient = require('mongodb').MongoClient;
var cors = require('cors');
const multer = require('multer');

var app=Express();
app.use(cors());

var CONNECTION_STRING = "mongodb+srv://admin:vmhowley123@cluster0.vdiynua.mongodb.net/?retryWrites=true&w=majority";



var DATABASENAME="allpaydb";
var database;

app.listen(5038,()=>{
        Mongoclient.connect(CONNECTION_STRING, (error, client)=>{
            database = client.db(DATABASENAME);
            console.log("Mongo DB Connection Successful 5038");
        })
})

app.get('/api/allpay/getnotes', (request,response)=>{
    database.collection('allpaycollection').find({}).toArray((error,result)=> { 
        response.send(result);
    });
})

