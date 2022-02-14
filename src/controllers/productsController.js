const { products } = require('../data');
const { productExists, dataExists } = require('../helpers/products');

const getProducts = (req, res) => {

    console.log(products);
    res.status(200).json({ success: true, data: products });
};
//corregir el error con la propiedad id
const createProducts = (req, res) => {
    const id = products.length + 1;

    if (dataExists(req)) {

        const newProduct = { id, ...req.body };
        products.push(newProduct);
        return res.status(200).json({ success: true, data: products });
    }
    return res.status(500).json({ success: false, msg: 'No se pudo insertar el nuevo producto ' });
}

const deleteProduct = (req, res) => {
    const { id } = req.params;
    if (!productExists(id)) {
        return res.status(404).json({ success: false, msg: `No existe producto con id ${id}` });
    }
    const productsUpdated = products.filter((product) => product.id !== Number(id));
    return res.status(200).json({ success: true, data: productsUpdated });
}

const updateProduct = (req, res) => {
    const { id } = req.params;

    if (!productExists(id)) {
        return res.status(200).json({ success: false, msg: `Product id ${id} does not exist` });

    } else if (dataExists(req)) {
        products.map((product) => {
            if (product.id === Number(id)) {
                product.name = req.body.name;
                product.description = req.body.description;
                product.price = req.body.price;
                product.image = req.body.image;
                product.stock = req.body.stock;

                return res.status(200).json({ success: true, data: products });

            }
        })
    }
}


module.exports = {
    getProducts,
    createProducts,
    deleteProduct,
    updateProduct
};