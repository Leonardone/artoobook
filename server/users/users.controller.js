var mongoose = require('mongoose');
var User = require('./users.model.js');
module.exports= (function(){
    var getuser= function(req, res){
        res.send("lista utenti");
    };
    var createuser = function(req, res){
        var Utente=req.body;
        var newUtente = new User(Utente);
        newUtente.save().then(function(data){
            res.status(200).send(data);
        }).catch(function(err){
            res.status(404).send(err);
        });
    
    };
    var detailuser=function(req, res){
        var id= req.params.id;
        res.send("dettaglio utente con id:"+id);
    };
    var deleteuser=function(req, res){
        var id= req.params.id;
        res.send("eliminato utente con id:" +id)
    };
    var updateuser=function(req, res){
        var id= req.params.id;
        res.send("aggiorno utente con id:" +id)
    };

    return{
        getuser: getuser,
        createuser :createuser,
        detailuser: detailuser,
        deleteuser:deleteuser,
        updateuser:updateuser
    };
})();