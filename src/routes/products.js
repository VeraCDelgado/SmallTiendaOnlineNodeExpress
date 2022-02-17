const { Router } = require('express');
//middleware
const { getProduct } = require('../middlewares/products');

const {
    getProducts,
    getOneProduct,
    createProduct,
    deleteProduct,
    updateProduct,

} = require('../controllers/productsController');
const router = Router();


router.route('/').get(getProducts).post(createProduct);
router.route('/:id').all(getProduct).delete(deleteProduct).patch(updateProduct).get(getOneProduct);



module.exports = router;