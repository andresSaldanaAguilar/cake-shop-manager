var express = require('express');
var router = express.Router();
const Cake = require('../models/Cake');

router.get('/', function (req, res) {
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

router.post('/', function (req, res) {
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

router.put('/', function (req, res) {
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

router.delete('/', function (req, res) {
  if(req.query.name){
      Cake.deleteOne({name:req.query.name})
      .then(items => res.send(items))
      .catch(err => res.status(404).json({ msg: err.message }));
  }
});

module.exports = router;
