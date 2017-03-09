$(document).ready(function(){

$('#miaform').submit(function(event){
    
  event.preventDefault();

  var nome = $('#nome').val();
  //si può anche fare con 
  //var nome = this.nome.value
  var cognome = this.cognome.value;
  var sesso= this.sesso.value;
  var età = this.età.value;
  var nuovo = {
      nome: nome,
      cognome: cognome,
      sesso: sesso,
      età: età
  }
  Users.creaUtente(nuovo);
  this.reset(); //pulisce la form dagli input
  disegna();
  
}); 

function disegna(){
  var str="";
Users.getUsers().then(function(users){
    for (let i=0; i<users.length; i++){
      str += "<tr>"+
      "<td>"+users[i].nome +"</td>"+
      "<td>"+users[i].cognome +"</td>"+
      "<td>"+users[i].sesso +"</td>"+
      "<td>"+users[i].età +"</td>"+
      "<td><span idutente='" +users[i]._id+ "' class='glyphicon glyphicon-trash' aria-hidden='true' style='cursor:pointer'></span></td>"+
      "<tr>";
    }
    $('#tbody').html(str);

}).catch();
};
disegna();


});