var express = require('express');
var router = express.Router();
var Contact = require('../models/contact');

router.post('/contact', function(req, res, next){
  Contact.create(req.body, function (err, contact){
    if (err) return handleError(err);
    res.send(`Thanks for your message, ${contact.name}! I'll be in touch.`);
  })
})

module.exports = router;
