var express = require('express');
var router = express.Router();
bodyParser = require('body-parser'); //parses information from POST


var mongoose = require('mongoose');

var TheatreSchema = mongoose.Schema({
 
  thtrName: String,
  totalSeats: String,
  ticketPrice : String,
  city: String
});
  var Theatre = mongoose.model('Theatre', TheatreSchema, 'theatre');


router.get('/getThtr', function (req, res) {
    console.log("REACHED GET FUNCTION ON SERVER");
    Theatre.find({}, function (err, docs) {
         res.json(docs);
         
    });

    });

router.get('/getThtr/:id', function (req, res) {
    console.log("REACHED GET ID FUNCTION ON SERVER");
     Theatre.find({_id: req.params.id}, function (err, docs) {
         res.json(docs);
         
    });
});

router.post('/addTheatre', function(req, res){
 
 console.log(req.body);
  
  var theatreName = req.body.thtrName;
  var totalSeats = req.body.totalSeats;
  var ticketPrice = req.body.ticketPrice;
  var cityName = req.body.city;

  var theatre = new Theatre({
    thtrName:theatreName,
    totalSeats:totalSeats,
    city:cityName,
    ticketPrice : ticketPrice
  });

console.log(theatre);
theatre.save(function(err,docs){
  if(err) throw err;
  console.log("Theatre Saved Successfully");
  res.json(docs);
});

})
router.delete('/deleteThtr/:id', function(req, res){
   console.log("REACHED Delete FUNCTION ON SERVER");
      Theatre.remove({_id:req.params.id}, function(err, docs){
        res.json(docs);
    });
})

router.put('/updateThtr/:id', function(req, res){
    console.log("REACHED PUT");
    console.log(req.body);
    Theatre.findOneAndUpdate({_id:req.params.id}, req.body, function (err, data) {
      console.log(data);
      res.json(data);
    });
})


//catch 404 and forward to error handler
router.use(function(req, res, next) {
  var err = new Error('Not Found'); 
  err.status = 404;
  next(err);
});

module.exports = router;
