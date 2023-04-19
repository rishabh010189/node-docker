const {writeFile, readFile, createServer, initializeServer} = require('./utils');

initializeServer();
// writeFile('hello.txt', 'hello World');

// readFile('index.js');

createServer();

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://rishabh0101:accessdenied@mymongo.2xgtg.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });