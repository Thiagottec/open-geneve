import express from 'express';
import { newPlayerModel, newPassworldModel } from '../models/schema.js';

const app = express();
app.use(express.json());

app.get('/logged/:email', async(req, res) => {
    const plaeyrData = await newPlayerModel.find({
        email: req.params.email
    })
    res.send(plaeyrData);
});
app.get('/competition/:email', async(req, res) => {
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
        console.log(error);
        res.status(500).send(error);
    }
})
app.post('/newPassword', async(req, res) => {
    try {
        const userAndPassword = new newPassworldModel(req.body);
        await userAndPassword.save();
        res.send(req.body);
    } catch (error) {
        res.status(500).send(error);
    }
})

export { app as openRoutes };