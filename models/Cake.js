const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const CakeSchema = Schema({
    name : {
        type: String,
        required: [true,"name property is required"],
        unique: [true,"name property must be unique"]
    },
    price : {
        type: Number,
        required: [true,"price property is required"]
    },
    flavors : {
        type: [String],
        required: [true,"flavors property is required"],
        validate: [(value) => value.length > 0, 'flavors cannot be empty'],
    }
});

CakeSchema.plugin(uniqueValidator);
let Cake = mongoose.model('cakes', CakeSchema);

module.exports = Cake;