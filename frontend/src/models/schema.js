import { text } from "express";

export default (mongoose) => {
    const schema = mongoose.Schema({
        newPlayer: {
            email: Text,
            required: true,
            primeiroNome: Text,
            ultimoNome: Text,
            endereco: Text,
            celphone: Number,
        },
        acessControll: {
            email: Text,
            required: true,
            hashpassw: Text,
            required: true,
        }
    });

    const newPlayer = mongoose.model('players', schema);

    return newPlayer;
};