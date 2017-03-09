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
      "<td><span idutente='" +users[i]._id+ "' class=' elimina glyphicon glyphicon-trash' aria-hidden='true' style='cursor:pointer'></span></td>"+
      "<td><span idutente='" +users[i]._id+ "' class=' modifica glyphicon glyphicon-pencil' aria-hidden='true' style='cursor:pointer'></span></td>"+
      "<tr>";
    }
    $('#tbody').html(str);
    $('.elimina').click(function(){
      var id = $(this).attr("idutente");
      elimina(id);
    });
       $('.modifica').click(function(){
      var id = $(this).attr("idutente");
      modifica(id);
      $('#aggiornaform').removeClass('hidden');

    })

}).catch();
};


function elimina(id){
  Users.deleteUser(id).then(function(data){
    console.log(data);
    disegna();
  }).catch(function(err){
    console.log(err);
  });
};





$('#nuovo').click(function(){
  $('#miaform').removeClass('hidden');
  $('#aggiornaform').hide();

                            });


function modifica(id){
Users.getDetails(id).then(function(user){
  $('#aggiornaform [name= cognome]').val(user.cognome);
  $('#aggiornaform [name= nome]').val(user.nome);
  $('#aggiornaform [name= sesso]').val(user.sesso);
  $('#aggiornaform [name= età]').val(user.età);



  $('#aggiornaform').removeClass('hidden');
  $('#miaform').addClass('hidden');
}).catch(function(err){
  console.log(err);
});
}


disegna();

});