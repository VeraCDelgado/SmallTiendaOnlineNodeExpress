const Product = require('../models/products');
const { getProduct } = require('../middlewares/products');


const getProducts = async(req, res) => {

    try {
        const products = await Product.find();
        res.status(200).json({ success: true, data: products });
    } catch (err) {
        res.status(500).json({ success: false, msg: err.message });

    }
};
const getOneProduct = (req, res) => {
    res.json({ success: true, data: res.product });

}

const createProduct = async(req, res) => {

    const product = new Product({...req.body });

    try {
        const newProduct = await product.save();
        return res.status(201).json({ success: true, data: newProduct });
    } catch (err) {
        return res.status(400).json({ success: false, msg: err.message });
    }
}

const deleteProduct = async(req, res) => {
    try {
        await res.product.remove();
        res.status(200).json({ success: true, msg: 'Deleted product' })

    } catch (err) {
        res.status(404).json({ success: false, msg: 'product does not exist' });
    }
}

const updateProduct = async(req, res) => {

    if (res.product.name !== null) {
        res.product.name = req.body.name;
    }
    try {
        const updatedProduct = await res.product.save();
        res.status(200).json({ success: true, data: updatedProduct });

    } catch (err) {
        res.status(400).json({ success: false, msg: err.message })
    }

}


module.exports = {
    getProducts,
    getOneProduct,
    createProduct,
    deleteProduct,
    updateProduct,

};