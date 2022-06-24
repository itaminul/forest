const express = require('express')
const app = express();

app.get('/', (req,res) => {
    res.status(200)
    .json({ message: 'Hello form the server', app:'nature'});
})
const port = 8002;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})