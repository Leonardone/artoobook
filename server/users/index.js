var express= require('express');
var router = express.Router();
var users = require('./users.controller.js')

//listautenti
router.get('/', users.getuser);
//Iscrizione listautenti
router.post('/', users.createuser);
//dettaglio utenti
router.get('/:id', users.detailuser);
//elimina utente
router.delete('/:id', users.deleteuser);
//aggiorna utente
router.put('/:id', users.updateuser);







module.exports = router;