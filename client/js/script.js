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
  
});


});