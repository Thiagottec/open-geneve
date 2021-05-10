import express from 'express';
import { newPlayerModel } from '../models/schema.js';


const app = express();
app.use(express.json());

app.get('/logged/:email', async(req, res) => {
    const plaeyrData = await newPlayerModel.find({
        email: req.params.email
    })
    res.send(plaeyrData);
});
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