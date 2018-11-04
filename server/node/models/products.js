const mongoose = require('mongoose');

// const deepPopulate = require('mongoose-deep-populate')(mongoose);

const productSchema = new mongoose.Schema({
    title: {type: String, required: false},
    price: {type: Number, required: false},
    shortDescription: {type: String, required: false},
    description: {type: String, required: false},
    conditions: {
        type: [{
            name: String,
            condition: Number
        }],
        default: []
    },
    // images: {type: [mongoose.Schema.Types.ObjectId], ref: 'Image'},
    // cover: {type: mongoose.Schema.Types.ObjectId, ref: 'Image', required: true},
    images: {type: [String], default: []},
    cover: {type: String, required: true},
    category: {type: [mongoose.Schema.Types.ObjectId], ref: 'Category'},
    totalRating: {type: Number, required: false},
    equipment: {type: [String], default: []},
    created: {type: Date, default: Date.now},
    createdBy: {type: String, default: 'admin'},
    hidden: {type: Boolean, default: false},
    isSold: {type: Boolean, default: false}
});

// productSchema.plugin(deepPopulate);

module.exports = mongoose.model('Product', productSchema);