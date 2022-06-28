const Tour = require('./../models/tourModel')

// exports.checkId = (req, res, next, val) => {
//     console.log(`Tour id is : ${val}`);
//     if(req.params.id * 1 > tours.length) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Invalid ID'
//         })
//     }
//     next();
// }

exports.checkBody = (req, res, next) => {
    if(!req.body.name && !req.body.price) {
        return res.status(400).json({
        status: 'fail',
        message: 'Missing name or price'
        })
    }
    next();
}

exports.getAllTours = (req,res) => {
    //  console.log('req.reqestTime');
    res.status(200).json({
        status: 'success',
        requestedAtt: req.reqestTime,
        // results: tours.length,
        // data: {
        //     tours
        // }
    })

}
exports.createTour = (req,res) => {
    res.status(201).json({
        status: 'success',
        data: {
            tour: newTour
        }
    })
}
exports.getTour = (req,res) => {
    console.log(req.params)
    const id = req.params.id * 1
    const tour = tours.find(el => el.id === id)
    res.status(200).json({
        status: 'success',
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