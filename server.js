const express = require('express');

const PORT = 3000;

const app = express();

app.get('/authenticate', (req, res) => {
    res.send('Authenticated');
});

app.listen(PORT, () => {
console.log(`App available on https://localhost:${PORT}`)
});
