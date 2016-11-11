var express = require('express');
var app = express();
var bodyParser = require('body-parser');

require('dotenv').config();
require('./config/database');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

var routes = require('./routes/index');
app.use('/', routes);

// error message
app.use(function(req, res, next){
  res.status(404).send('error');
})

// listening
app.listen(process.env.PORT || 3000, function(){
  console.log('Express server listening');
});
