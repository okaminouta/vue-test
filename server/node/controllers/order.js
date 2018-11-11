const mongoose = require('mongoose');
const Order = require('../models/Order');
const Product = require('../models/products');
const User = mongoose.model('User');

async function orderCreate(req, res) {
  let user;

  if (!req.payload._id) {
    user = false;
  } else {
    // unnesesary but fuck it
    user = await User.findById(req.payload._id).exec();
  }

  let data = req.body.products;
  let ids = req.body.products.map((el) => mongoose.Types.ObjectId(el.id))
  let products = await Product.find({'_id': {$in: ids}}).exec();
  let orderProducts = products.map((el) => {
    let product = data.find(item => item.id === el.id);
    return {
      ...product,
      title: el.title,
      price: el.price
    }
  })
  let customer = user ? user._id.toString() : req.body.phone;

  let order = new Order();
  order.customer = customer;
  order.commentary = req.body.commentary;
  order.products = orderProducts;

  order.save((err, data) => {
    if (err) {
      return res.json({
        success: false,
        err: err
      });
    }
    return res.json({
      success: true,
      data: data
    });
  });
}


module.exports = {
  orderCreate,
};
