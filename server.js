const app = require('./app')
const port = 8002;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})