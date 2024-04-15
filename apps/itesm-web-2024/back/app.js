const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000; 

//middlewares
app.use(cors());
app.use(bodyParser.json());

app.post('/api/test', (req, res) => {
    res.json({
        greeting: "Hello World!"
    });
});

app.post('/api/customGreeting', (req, res) => {
  const name = req.body.name;
  const state = "itesm"; // Define y asigna un valor a la variable state
  res.json({
    greeting: `Hello ${name}! from ${state}` 
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});