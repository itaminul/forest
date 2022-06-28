const express = require('express')
const app = express();
const morgan = require('morgan')
const userRouter = require('./routes/usersRouters')
const tourRouter = require('./routes/toursRouter')

// console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === 'development'){
app.use(morgan('dev'));
}
app.use(express.json())
app.use(express.static(`${__dirname}/public`))
app.use((req,res, next) => {
     console.log('hello middleware')
    next();
})

app.use((req,res, next) => {
    req.reqestTime = new Date().toISOString;
    next();
})


  app.use('/api/v1/users', userRouter)
 app.use('/api/v1/tours', tourRouter)

module.exports = app;