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

exports.getAllTours = async(req,res) => {
    try {
        //build query
        const queryObj = { ...req.query}
        const excludedFields = ['page', 'sort', 'limit', 'fields']
        excludedFields.forEach(el => delete queryObj[el])
        const query = Tour.find(queryObj)

        //execute query
        const tours = await query
        // console.log(req.query)
        // const tours = await Tour.find({
        //     duration: 5,
        //     price: 497
        // })

        // const tours = await Tour.find()
        // .where('duration')
        // .equals(5)
        // .where('price')
        // .equals(10)

        res.status(200).json({
            status: 'success',
            results: tours.length,
            data: {
                tours
            }
        })
        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: err
        })

        
    }


}
exports.createTour = async(req,res) => {
    try {
    const newTour = await Tour.create(req.body)
    res.status(201).json({
        status: 'success',
        data: {
            tour: newTour
        }
    })        
    } catch (error) {
        res.status(400).json({
        status: 'fail',
        message: error
        })        
    }
}
exports.getTour = async(req,res) => {
    try {
    const tour =  await Tour.findById(req.params.id)
    res.status(200).json({
        status: 'success',
        data: {
            tour
        }
    })
        
    } catch (error) {
        res.status(400).json({
        status: 'fail',
        message: error
        })           
    }
    }
    
    exports.updateTour = async(req,res) => {
        try {
            const tours = await Tour.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            })
            res.status(200).json({
                status: 'success',
                requestedAtt: req.reqestTime,
                data: {
                    tours
                }
            })
        } catch (error) {
            res.status(400).json({
                status: 'fail',
                message: error
                })    
            
        }
    }
    exports.deleteTour = async(req,res) => {
        try {
            const tours = await Tour.findByIdAndDelete(req.params.id)
               res.status(200).json({
                status: 'success',
                requestedAtt: req.reqestTime,
                data: {
                    tours
                }
            })
        } catch (error) {
            res.status(400).json({
                status: 'fail',
                message: error
                })    
            
        }
    }   