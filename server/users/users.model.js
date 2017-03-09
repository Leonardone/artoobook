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
userSchema.pre('save', function (next) {
  this.nome = this.nome.charAt(0).toUpperCase() 
              + this.nome.substring(1).toLowerCase();
this.cognome= this.cognome.charAt(0).toUpperCase()
              + this.cognome.substring(1).toLowerCase();
  next();
});

var User = mongoose.model('User', userSchema);
module.exports = User;