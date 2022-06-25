const fs = require('fs')
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/tours-simple.json`))

exports.getAllTours = (req,res) => {
    //  console.log('req.reqestTime');
    res.status(200).json({
        status: 'success',
        requestedAtt: req.reqestTime,
        results: tours.length,
        data: {
            tours
        }
    })

}
exports.createTour = (req,res) => {
console.log('createTour')
}
exports.getTour = (req,res) => {
    console.log('createTour')
    }
    
    exports.updateTour = (req,res) => {
    console.log('createTour')
    }
    exports.deleteTour = (req,res) => {
    console.log('createTour')
    }   