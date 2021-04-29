import express from 'express';
import mongoose from 'mongoose';
import { login } from './apiLogin.js.js'

require('dotenv').config();

mongoose.connect(`mongodb+srv://openGeneve:AB9W6YH1fv8aPsfF@thiagottec.uzc71.mongodb.net/openGeneve?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
app.use(express.json());
app.use(login);
app.listen(process.env.USERDB, () => console.log("http://localhost:3030"));