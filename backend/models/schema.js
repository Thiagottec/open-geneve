import mongoose from 'mongoose';

const newPlayerSchema = mongoose.Schema({
    "email": {
        type: String,
        require: true
    },
    "primeiroNome": {
        type: String,
        require: true
    },
    "ultimoNome": {
        type: String,
        require: true
    },
    "celular": {
        type: String,
        require: true
    },
    "endereco": {
        type: String,
        require: true
    },
    "senha": {
        type: String,
        require: true
    },
    "backhand": {
        type: String,
        require: true
    },
    "forehand": {
        type: String,
        require: true
    }
});

const newPassWorldSchema = mongoose.Schema({
    "email": {
        type: String,
        require: true
    },
    "senha": {
        type: String,
        require: true
    }
});

const newPlayerModel = mongoose.model('opengeneveplayers', newPlayerSchema);
//const newPassworld = mongoose.model('opengeneveplayer', newPassWorldSchema);

export { newPlayerModel };