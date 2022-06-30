const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Tour = require('./../models/toureModel')
const app = require('./app')
dotenv.config({ path: './config.env'})
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

const tours = JSON.parse(fs.readFileSync('tours-sample.json', 'utf-8'))

const importData = async () => {
    try {
        await Tour.create(tours)
        console.log('Data successfully loaded')
    } catch (error) {
        console.log(error)
        
    }
}