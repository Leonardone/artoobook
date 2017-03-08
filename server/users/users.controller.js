module.exports= (function(){
    var getusers= function(req, res){
        res.send("lista utenti");
    };
    return{
        getusers: getusers
    }
})();