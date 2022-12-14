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

router.get("/:id", async(req, res) => {
    res.send(await data.getProductById(req.params.id));
});

router.post("/", async(req, res) => {
    res.send(await data.addProduct(req.body));
});

router.put("/:id", async(req, res) => {
    res.send(await data.updateProductById(req.params.id, req.body));
});

router.delete("/:id", async(req, res) => {
    res.send(await data.removeProductById(req.params.id));
});

module.exports = router;