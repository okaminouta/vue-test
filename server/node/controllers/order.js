const mongoose = require('mongoose');
const Product = require('../models/products');

async function orderCreate(req, res) {
  let data = req.body;
  let ids = req.body.map((el)=>{
    return mongoose.Types.ObjectId(el.id)
  })
  let products = await Product.find({'_id': {$in: ids}}).exec();
  let orderProducts = products.map((el)=>{
    let product = data.find( item => item.id === el.id);
    return {
      ...product,
      title: el.title,
      price: el.price
    }
  })
  let order = {
    phone: "phone",
    name: "name",
    comments: "coments",
    products: orderProducts,
  }
  // let products = await productsQuery.exec();
  // let summArr = await countSumm(data);
  // console.log(summArr,'summArr')
  // let summ = summArr.reduce((a,b)=> a + b, 0);
  // console.log(summ,'summ')



  return res.json({
    success: true,
    data: order
  });
}

// function countSumm(data) {
//   return data.map( (el)=>{
//     const query1 = Product.findById(el.id).then((err, product) => {
//       if (err || !product) {
//         return null;
//       }
//       return product;
//     });
//     const result1 = await query1.exec();
//   })
// }


module.exports = {
  orderCreate,
};
