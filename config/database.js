var mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(process.env.DB_PATH);

mongoose.connection.once('open', function(){
  console.log('Connected to Mongo DB!');
})

mongoose.connection.on('error', function(err){
  console.error('DB error: ' + err);
})

module.exports = mongoose;
