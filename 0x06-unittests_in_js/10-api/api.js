const express = require('express');
const app = express();
const port = 7865

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (/^\d+$/.test(id)) {
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Invalid cart ID\n');
  }
});

app.get('/available_payments', (req, res) => {
  res.status(200).json({
  payment_methods: {
    credit_cards: true,
    paypal: false
  }
 });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (userName) {
    res.status(200).send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Missing userName\n');
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
