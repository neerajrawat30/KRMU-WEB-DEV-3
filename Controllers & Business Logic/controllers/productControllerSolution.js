const products = require("../data/products");

const getAvailableProducts = (req, res) => {
    const availableProducts = products.filter((product) => product.inStock === true);

    res.status(200).json(availableProducts);
};

module.exports = {
    getAvailableProducts
};
