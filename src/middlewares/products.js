const { products } = require('../data');
const Product = require('../models/products');


const productExists = (id) => {
    const exists = products.find((product) => product.id === Number(id));
    if (!exists) {
        return false;
    }
    return true;

}


const dataExists = (req) => {
    const { name, description, price, image, stock } = req.body;
    if (name && description && price && image && stock) {
        return true;
    }
    return false;
}
async function getProduct(req, res, next) {
    const { id } = req.params;
    let product;
    try {
        product = await Product.findById(id);
        if (product === null) {
            return res.status(404).json({ msg: `cannot find product` });
        }

    } catch (err) {
        return res.status(500).json({ msg: err.msg });
    }
    res.product = product;
    next();
};

module.exports = { productExists, dataExists, getProduct };