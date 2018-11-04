
const Product = require('../models/products');

async function orderCreate(req, res) {
  let data = req.body;
  let summArr = await countSumm(data);
  console.log(summArr,'summArr')
  let summ = summArr.reduce((a,b)=> a + b, 0);
  console.log(summ,'summ')



  return res.json({
    success: true,
    data: summ
  });
}

function countSumm(data) {
  return data.map((el)=>{
    const query1 = Product.findById(el.id).then((err, product) => {
      if (err || !product) {
        return null;
      }
      return product;
    });
    const result1 = await query1.exec();
  })
}


module.exports = {
  orderCreate,
};
