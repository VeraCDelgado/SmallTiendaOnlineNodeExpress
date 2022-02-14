const { products } = require('../data');

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

module.exports = { productExists, dataExists };