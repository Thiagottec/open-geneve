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

const newPassworldSchema = mongoose.Schema({
    "email": {
        type: String,
        require: true
    },
    "senha": {
        type: String,
        require: true
    }
});

const newOpensSchema = mongoose.Schema({
    "email": {
        type: String,
        require: true
    },
    "ativo": {
        type: Boolean,
        require: true
    }
});

const newPlayerModel = mongoose.model('opengeneveplayers', newPlayerSchema);
const newPassworldModel = mongoose.model('users', newPassworldSchema);
const newOpensModel = mongoose.model('opens', newOpensSchema);

export { newPlayerModel, newPassworldModel, newOpensModel };