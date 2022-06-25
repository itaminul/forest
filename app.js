const fs = require('fs')
const express = require('express')
const app = express();
app.use(express.json())

app.use((req,res, next) => {
    console.log('hello middleware')
    next();
})

app.use((req,res, next) => {
    req.reqestTime = new Date().toISOString;
    next();
})

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/tours-simple.json`))

const getAllTours = (req,res) => {
    console.log(req.reqestTime);
    res.status(200).json({
        status: 'success',
        requestedAtt: req.reqestTime,
        results: tours.length,
        data: {
            tours
        }
    })

}
const createTour = (req,res) => {
console.log('createTour')
}
const getTour = (req,res) => {
    console.log('createTour')
    }
    
const updateTour = (req,res) => {
    console.log('createTour')
    }
const deleteTour = (req,res) => {
    console.log('createTour')
    }
            
        

// app.post('/api/v1/tours',getTours)
// app.post('/api/v1/tours/:id',updateTours)
// app.post('/api/v1/tours/:id', deleteTours)

app
.route('/api/v1/tours')
.get(getAllTours)
.post(createTour);

app
.route('/api/v1/tours/:id')
.get(getTour)
.patch(updateTour)
.delete(deleteTour);


const getAllUsers = (req,res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yes default'
    })
}

const createUser = (req,res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yes default'
    })
}

const getUser = (req,res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yes default'
    })
}
const updateUser = (req,res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yes default'
    })
}

const deleteUser = (req,res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yes default'
    })
}

const tourRouter = express.Router()
const userRouter = express.Router()
userRouter
.route('/')
.get(getAllUsers)
.post(createUser)

userRouter
.route('/:id')
.get(getUser)
.patch(updateUser)
.delete(deleteUser)

app.use('/api/v1/tours', tourRouter)
 app.use('/api/v1/user', userRouter)



const port = 8002;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})