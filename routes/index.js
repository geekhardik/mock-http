var express = require('express');
var router = express.Router();
var sleep = require('await-sleep');

/* POST trae. */
router.post('/v2/trace', function(req, res, next) {
  res.status(200).send({
    "valid" : 1
  })
});

/* POST event. */
router.post('/v2/event', async function(req, res, next) {
	console.log(req.headers);
	await sleep(200);
	res.status(200).json(req.body);
});

/* POST datapoint. */
router.post('/v2/datapoint', function(req, res, next) {
  res.status(200).send('"OK"')
});

/* GET TOKEN. */
router.get('/v2/token', function(req, res, next) {
  res.status(200).send("ok");
});

module.exports = router;
