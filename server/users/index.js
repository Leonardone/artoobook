var express= require('express');
var router = express.Router();
var users = require('./users.controller.js')

//listautenti
router.get('/', users.getuser);
//Iscrizione listautenti
router.post('/', users.createuser);
//dettaglio utenti
router.get('/id/:id', users.detailuser);
//elimina utente
router.delete('/id/:id', users.deleteuser);
//aggiorna utente
router.put('/id/:id', users.updateuser);
//ricerca per nome o cognome
router.get('/cerca/', users.cercausers);







module.exports = router;