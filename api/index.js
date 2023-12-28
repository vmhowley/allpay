const { MongoClient } = require('mongodb');
const Express = require('express');
const uri ="mongodb://localhost:27017/";
const client = new MongoClient(uri);
const bodyParser = require('body-parser');
var db;


const app = Express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(9000, async ()=>{
  console.log('listening port [9000]')
  await client.connect();
  db =  client.db('allpaydb');
  console.log('DataBase Connected')
  console.log('Server by: Victor M Howley')
})


app.get('/1', async(req,res)=>{
  const collection = await db.collection('allpaycollection');
  // Find the first document in the collection
  const first = await collection.find({ id: 1
  }).toArray() 
  res.send(first);
}) 
app.post('/user', async(req,res)=>{
  const collection = await db.collection('allpaycollection');
  // Find the first document in the collection
  const first = await collection.find({ name: req.body.name
  }).toArray() 
  const jsondata = JSON.parse(first)
  console.dir(req.body)
  res.send(first);
})