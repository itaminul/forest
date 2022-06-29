const mongoose = require('mongoose')

const toursSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [ true, 'A tour must have a name'],
        unique: true,
        trim: true
    },
    durations: {
        type: Number,
        required: [true, 'A tour must have a duration']
    },
    maxGroupSise: {
        type: Number,
        required: [true, 'A tour must have a']
    },
    difficulty: {
        type: String,
        required: [true, 'A tour must have difficulty']
    },
    ratingAverage: {
        type: Number,
        default: 4.5
    },
    ratingQuantity: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A tour price is required']
    },
    priceDiscount: Number,
    summery: {
        type: String,
        trim: true,
        requied:  [true, "This tour get"]
        },
        description: {
            type: String,
            trim: true
        },
        imageCover: {
            type: String,
            required: [true, 'A tour have a imge cover']
        },
        image: [String],
        createdAt: {
            type: Date,
            default: Date.now()
        },
        startDates: [Date]
})

const Tour = mongoose.model('Tour', toursSchema)
module.exports = Tour