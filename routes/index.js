var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/v2/trace', function(req, res, next) {
  res.status(200).send({
    "valid" : 1
  })
});

/* GET home page. */
router.post('/v2/event', function(req, res, next) {
  res.status(200).send('"OK"')
});

/* GET home page. */
router.post('/v2/datapoint', function(req, res, next) {
  res.status(200).send('"OK"')
});

module.exports = router;
