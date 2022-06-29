const express = require('express')
const tourController = require('../controllers/tourController')
 const router = express.Router()

//  router.param('id', tourController.checkId)

router.route('/getAll').get(tourController.getAllTours)
router.route('/create').post(tourController.createTour);

router.route('/getTourById/:id').get(tourController.getTour)
router.route('/update/:id').patch(tourController.updateTour)
router.route('/delete/:id').delete(tourController.deleteTour);
module.exports = router







