const express = require('express');

const app = express();
const port = 3000; 

app.post("/api/test", (req, res) => {
    res.json({
        greeting: "Hello World!"
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});