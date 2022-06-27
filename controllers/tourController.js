const fs = require('fs')
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/tours-simple.json`))

exports.checkId = (req, res, next, val) => {
    console.log(`Tour id is : ${val}`);
    if(req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: 'fail',
            message: 'Invalid ID'
        })
    }
    next();
}

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
    res.status(200).json({
        status: 'success',
        requestedAtt: req.reqestTime,
        results: tours.length,
        data: {
            tours
        }
    })
    }
    
    exports.updateTour = (req,res) => {
        res.status(200).json({
            status: 'success',
            requestedAtt: req.reqestTime,
            data: {
                tours: '<Updated tour here...>'
            }
        })
    }
    exports.deleteTour = (req,res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Update tour here...>'
        }
    })
    }   