const { MongoClient } = require('mongodb');
const Express = require('express');
const app = Express();
const uri ="mongodb://localhost:27017/";
const client = new MongoClient(uri);

var db;
app.listen(9000, async ()=>{
  console.log('listening port 9000')
   await client.connect();
    db =  client.db('local');
  console.log('Mongo Connected')
})

app.get('/1', async(req,res)=>{
  const collection = await db.collection('startup_log');
  // Find the first document in the collection
  const first = await collection.find({}).toArray() 
  res.send(first);
})

