const mongoose = require('mongoose');

// const deepPopulate = require('mongoose-deep-populate')(mongoose);

const orderSchema = new mongoose.Schema({
  customer: {type: Number, required: true},
  products: {
    type: [{
      product: Number,
      quantity: Number
    }],
    default: [], required: true
  },
  total: {type: Number, required: true},
  commentary: {type: String, required: false},

});

// productSchema.plugin(deepPopulate);

module.exports = mongoose.model('Order', orderSchema);
