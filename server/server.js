'use strict';

const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const bodyParser = require('body-parser');

// ----------------- MODELS
// Import post schema
const MainPostSchema = require('./models/mainPost');
// ----------------- MODELS

const app = express();
const router = express.Router();

const port = process.env.API_PORT || 3001;
//db config
mongoose.connect('mongodb://procereMain:bjarne@ds147421.mlab.com:47421/procere');

//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
/*
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers',
  'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});
*/

//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
});

//now we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

// --------------------------------------- MainPost
//adding the /comments route to our /api router
router.route('/mainPosts')
//retrieve all comments from the database
.get(function(req, res) {
  //looks at our Comment Schema
  MainPostSchema.find(function(err, posts) {
    if (err)
    res.send(err);
    //responds with a json object of our database comments.
    res.json(posts)
  });
})
//post new comment to the database
.post(function(req, res) {
  const mainPost = new MainPostSchema();
  //body parser lets us use the req.body
  mainPost.author = req.body.author;
  mainPost.text = req.body.text;
  mainPost.save(function(err) {
    if (err) {
      console.log('hi');
      res.json(err);
    } else {
      res.json({ message: 'Post successfully added!' });
    }
  });
});
// --------------------------------------- MainPost
