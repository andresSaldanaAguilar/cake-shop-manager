const mongoose = require('mongoose');

module.exports.connect = function(uri){
    mongoose.connect(uri,{ useNewUrlParser: true,useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
    return mongoose;
}