const mongoose = require('mongoose');

module.exports.connect = function(){
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    let connStr = 'mongodb://localhost:27017/Cake-Shop';
    process.argv.forEach(function (val, index, array) {
      if(val.includes('connectionStr')){
        connStr = val.substring(val.indexOf('=')+1,val.length);
      }
    });
    mongoose.connect(connStr)
    .then(() => console.log('Connected to '+connStr))
    .catch(err => console.log(err));
    return mongoose;
}