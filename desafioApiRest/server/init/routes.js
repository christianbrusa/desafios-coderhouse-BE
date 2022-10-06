const express = require("express");
const router = express.Router();

const ProductsService = require("../products.service.js");
const data = new ProductsService("../db/products.txt");

router.get("/", async(req, res) => {
    const products = await data.listAllProducts();
    res.send(products);
});

router.get("/random", async(req, res) => {
    const randomProduct = await data.listRandomProduct();
    res.send(randomProduct);
});

module.exports = router;