import express from 'express';

import './database/connection';

const app = express();
app.use(express.json());

app.post('/orphanages', (request, response) => {
  console.log(request.body)
  return response.json({ mensagem: "OI MUNDO"});
});

app.listen(3333, () => {
  console.log('server start => 3333');
});