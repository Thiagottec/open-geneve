import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { openRoutes } from './routes/Routes.js';

mongoose.connect("mongodb+srv://thiago_ttec:thiago_ttec071@cluster0.uzc71.mongodb.net/openGeneve?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    console.log("Conectado via mongoose")
).catch((err) => {
    console.log(err);
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(openRoutes);
app.listen(4040, () => console.log("http://localhost:4040"));