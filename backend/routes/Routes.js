import express from 'express';
import { newPlayerModel } from '../models/schema.js';


const app = express();
app.use(express.json());

app.get('/logged/:email', (req, res) => {
    console.log(req.params.email);
    res.send(req.params.email);
})

app.post('/NewPlayer', async(req, res) => {
    try {
        const newPlayer = new newPlayerModel(req.body);
        await newPlayer.save();
        res.send(req.body);
    } catch (error) {
        res.status(500).send(error);
    }
})

export { app as openRoutes };