module.exports = function(mongoose){
    //connessione al db
mongoose.connect("mongodb://baldo:baldone@ds121980.mlab.com:21980/artoobook", function(err){
    if(err){
        console.log(err);
    }else{
        console.log("database connesso");
    }
});
};