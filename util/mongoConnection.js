const mongoose = require('mongoose');

module.exports.connect = function(uri){
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    mongoose.connect(uri)
    .then(() => console.log('Connected to '+uri))
    .catch(err => console.log(err));
    return mongoose;
}