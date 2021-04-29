import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://openGeneve:AB9W6YH1fv8aPsfF@opengeneve.uzc71.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
app.use(express.json());
app.use(studentRoutes);
app.listen(4040, () => console.log("http://localhost:4040"));