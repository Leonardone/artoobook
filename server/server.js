var express= require('express');
var path = require ('path');
var app = express();
const PORT = 3000;


//BOOTSTRAP

app.use('/bootstrap', express.static(path.join(__dirname, "..", "node_modules","bootstrap", "dist")));

//JQUERY
app.use('/jquery', express.static(path.join(__dirname, "..", "node_modules","jquery", "dist")));

//JS e CSS
app.use('/js',express.static(path.join(__dirname, "..", "client", "js")));
app.use('/css',express.static(path.join(__dirname, "..", "client", "css")));



//SERVIAMO LA INDEX
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,"..", "client", "index.html"));
})




//START SERVER
app.listen(PORT, function(err){
        console.log("server connesso su http://localhost:" +PORT);
                                });
