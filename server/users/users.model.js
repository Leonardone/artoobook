var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    nome:{
        type: String,
        required: [true, 'Devi inserire il nome']
    },
    cognome:{
        type: String,
        required: [true, 'Devi inserire il cognome'],
    },
    sesso: { 
        type: String,
        enum: ['Male','Female']},
    età:{
        type: Number,
        required: true,
        min: [15, "Devi avere almeno 15anni"],
        max: 90
        },

});

var User = mongoose.model('User', userSchema);
module.exports = User;