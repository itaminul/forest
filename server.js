const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')
dotenv.config({ path: './config.env'})
// console.log(process.env)

const DB = process.env.DATABASE.replace(
    process.env.DATABASE_PASSWORD
)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(con => {
    console.log(con.connections)
    console.log('Db connection success')
})

const port = process.env.PORT ||  8002;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})