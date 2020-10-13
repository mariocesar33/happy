import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  return response.json({ messgem: "ola mundo"});
});

app.listen(3333, () => {
  console.log('server start => 3333');
});