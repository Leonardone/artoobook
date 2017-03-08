var express= require('express');
var router = express.Router();
var users = require('./users.controller.js')

//listautenti
router.get('/', users.getusers);







module.exports = router;