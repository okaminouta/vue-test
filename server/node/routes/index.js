const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const multer = require('multer');
const storage = multer.diskStorage(
    {
        destination: 'uploads/',
        filename: function ( req, file, cb ) {
            let arr = file.originalname.split('.');
            let type = arr[arr.length - 1];
            cb( null, Date.now() + '.' + type);
        }
    }
);
const upload = multer({storage: storage});
const auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
});

const ctrlProfile = require('../controllers/profile');
const ctrlAuth = require('../controllers/authentication');
const ctrlProducts = require('../controllers/products');
const ctrlOrders = require('../controllers/order');
const ctrlCategory = require('../controllers/category');
const ctrlImage = require('../controllers/image');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

//order
router.post('/orders', auth,  ctrlOrders.orderCreate);

// product
router.get('/products', ctrlProducts.productGet);
router.get('/admin/products', ctrlProducts.productGetAdmin);
router.post('/products', upload.fields([{ name: 'cover', maxCount: 1 }, { name: 'images', maxCount: 20 }]), ctrlProducts.productPost);
router.put('/products/:id', upload.fields([{ name: 'cover', maxCount: 1 }, { name: 'images', maxCount: 20 }]), ctrlProducts.productPut);
// router.put('/products/:id', ctrlProducts.deleteImageFromProduct);
router.delete('/products', ctrlProducts.productDelete);

// category
router.get('/category', ctrlCategory.categoryGet);
router.post('/category', ctrlCategory.categoryPost);
router.put('/category', ctrlCategory.categoryPut);
router.delete('/category', ctrlCategory.categoryDelete);

// image
router.get('/image/:id', ctrlImage.imageGetByID);


module.exports = router;
