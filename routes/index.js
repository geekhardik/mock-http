var express = require('express');
var router = express.Router();

/* POST trae. */
router.post('/v2/trace', function(req, res, next) {
  res.status(200).send({
    "valid" : 1
  })
});

/* POST event. */
router.post('/v2/event', function(req, res, next) {
  res.status(200).send('"OK"')
});

/* POST datapoint. */
router.post('/v2/datapoint', function(req, res, next) {
  res.status(200).send('"OK"')
});

/* GET TOKEN. */
router.get('/v2/token', function(req, res, next) {
  res.status(200).send({
    "count": 0,
    "results": [
      {
        "created": 1556746230000,
        "creator": "string",
        "description": "string",
        "disabled": true,
        "expiry": 1558474230000,
        "id": "string",
        "lastUpdated": 1557696630000,
        "lastUpdatedBy": "string",
        "latestRotation": 1556832630000,
        "limits": {
          "categoryNotificationThreshold": {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0
          },
          "categoryQuota": {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0
          }
        },
        "name": "string",
        "notifications": [
          {
            "credentialId": "string",
            "type": "AmazonEventBridge"
          }
        ],
        "secret": "string"
      }
    ]
  })
});

module.exports = router;
