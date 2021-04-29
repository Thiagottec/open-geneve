import express from 'express';

import api from '../api/api.js';

const app = express();


app.put('/newplayer', api);

app.get('/mydata', api);

app.delete('/remove/', api);



export { app as accountRouter };