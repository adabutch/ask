var express         = require('express'),
    app             = express(),
    bodyParser      = require('body-parser'),
    MongoClient     = require('mongodb').MongoClient,
    ObjectID        = require('mongodb').ObjectID,
    dbUrl           = 'mongodb://localhost:27017',
    dbName          = 'ask',
    db;
    
    
MongoClient.connect(dbUrl, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err)

  // Storing a reference to the database so you can use it later
  db = client.db(dbName)
  console.log(`- - - - - -`);
  console.log(`Connected MongoDB: ${dbUrl}`);
  console.log(`Database: ${dbName}`);
  console.log(`- - - - - -`);
})

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();

});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json())

app.get('/api', function (req, res) {
  res.send('api');
});

app.get('/api/questions', function (req, res) {
  db.collection('ask', (err, collection) => {
    if (err) throw err;
    
    collection.find({})
    .toArray((error, documents) => {
      if (err) throw error;
  
      res.send(documents);
    });
  });
});

app.post('/api/question', function(req, res) {
  // console.log(req)
  // Insert JSON straight into MongoDB
  db.collection('ask').insertOne(req.body, function (err, result) {
    if (err) {
      console.log('Post Error', err)
      res.send('Post Error');
    }
    else {
      console.log('Post Success', res.body)
      res.send('Post Success');
    }
  });
});

app.post('/api/question/delete/',function(req, res){
  console.log(req.body._id)
  // ObjectID is not defined
  // db.collection("ask").deleteOne({_id: new ObjectID(req.body._id)}, function (err, data) {
  //   if(err != null){
  //     return console.log(err)
  //   }
  //   res.send(data);
  //   console.log(data);
  // });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});