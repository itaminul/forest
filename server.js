const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: './config.env'})
const app = require('./app')
// console.log(process.env)

const DB = process.env.DATABASE.replace(
    process.env.DATABASE_PASSWORD
)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con => {
    // console.log(con.connections)
    console.log('Db connection success')
})

const port = process.env.PORT ||  8002;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})