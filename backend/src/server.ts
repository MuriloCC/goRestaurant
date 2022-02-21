import express from 'express'

const app = express();

app.get('/teste', (request, response) => {
  return response.send('Rota 1');
})

app.listen(5000, () => console.log('rodando hiihi'));