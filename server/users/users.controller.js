module.exports= (function(){
    var getuser= function(req, res){
        res.send("lista utenti");
    };
    var createuser = function(req, res){
        res.send("creazione utente");
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