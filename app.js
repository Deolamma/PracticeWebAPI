const express = require('express');


const app = express();
const port = 2000;


app.get('/', (req, res) => {
    res.send('Welcome to my test WebAPI Using Mongoose');
})

app.listen(port, () => {
    console.log('Port is listening on:', port);
})