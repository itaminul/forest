const express = require('express')
const app = express();
app.use(express.json())
const userRouter = require('./routes/usersRouters')
const tourRouter = require('./routes/toursRouter')

app.use((req,res, next) => {
    // console.log('hello middleware')
    next();
})

app.use((req,res, next) => {
    req.reqestTime = new Date().toISOString;
    next();
})


  app.use('/api/v1/users', userRouter)
 app.use('/api/v1/tours', tourRouter)

module.exports = app;