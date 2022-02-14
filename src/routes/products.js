const { Router } = require('express');
const {
    getProducts,
    createProducts,
    deleteProduct,
    updateProduct
} = require('../controllers/productsController');
const router = Router();
router.route('/').get(getProducts).post(createProducts);
router.route('/:id').delete(deleteProduct).put(updateProduct);



module.exports = router;