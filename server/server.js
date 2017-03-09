var express= require('express');
var path = require ('path');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var app = express();
const PORT = 3000;


//parser del body
app.use(bodyparser.json());



//connessione al database
require('./config/database.js')(mongoose);
require('./routes/routes.js')(app, express, path);





//START SERVER
app.listen(PORT, function(err){
        console.log("server connesso su http://localhost:" +PORT);
                                });
