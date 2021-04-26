import express from 'express';
import mongoose from 'mongoose';
import { login } from './apiLogin.js'

require('dotenv').config();

mongoose.connect(`mongodb+srv://{$process.env.USERDB}:{&process.env.PASSDB}@thiagottec.uzc71.mongodb.net/ThiagoTTEC?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
app.use(express.json());
app.use(login);
app.listen(3030, () => console.log("http://localhost:3030"));