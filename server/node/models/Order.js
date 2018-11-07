const mongoose = require('mongoose');

// const deepPopulate = require('mongoose-deep-populate')(mongoose);

const orderSchema = new mongoose.Schema({
  customer: {type: Number, required: true},
  products: {
    type: [],
    default: [],
    required: true,
  },
  commentary: {type: String, required: false},
  created: {type: Date, default: Date.now},

});

// productSchema.plugin(deepPopulate);

module.exports = mongoose.model('Order', orderSchema);
