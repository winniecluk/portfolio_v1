var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://winniecluk:Basket0Mongoose@ds151127.mlab.com:51127/contact');

mongoose.connection.once('open', function(){
  console.log('Connected to Mongo DB!');
})

mongoose.connection.on('error', function(err){
  console.error('DB error: ' + err);
})

module.exports = mongoose;
