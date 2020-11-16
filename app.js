const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Cake = require('./Model/Cake.js');

const MongoConnection = require('./Util/MongoConnection.js');
MongoConnection.connect('mongodb://localhost:27017/Cake-Shop');

app.get('/cakes', function (req, res) {
    if(req.query.name){
        Cake.findOne({name:req.query.name})
        .then(items => res.send(items))
        .catch(err => res.status(404).json({ msg: 'No items found' }));
    }
    else{
        Cake.find()
        .then(items => res.send(items))
        .catch(err => res.status(404).json({ msg: 'No items found' }));
    }
});

app.post('/cakes', function (req, res) {
    if(req.body){
        const cake = new Cake({
            name: req.body.name,
            flavors: req.body.flavors,
            price: req.body.price
        });
        cake.save()
        .then(item => res.status(200).send(item))
        .catch(err => res.status(200).json({ errorMessage: err.message }));
    }
});

app.put('/cakes', function (req, res) {
    if(req.body){
        Cake.updateOne({name:req.query.name},
            { $set: {
                name: req.body.name,
                flavors: req.body.flavors,
                price: req.body.price
            } 
        })
        .then(item => res.status(200).send(item))
        .catch(err => res.status(200).json({ errorMessage: err.message }));
    }
});

app.delete('/cakes', function (req, res) {
    if(req.query.name){
        Cake.deleteOne({name:req.query.name})
        .then(items => res.send(items))
        .catch(err => res.status(404).json({ msg: err.message }));
    }
});

app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});