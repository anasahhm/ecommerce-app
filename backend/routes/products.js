
const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add a product (Admin only)
router.post('/', async (req, res) => {
  const { name, price, description, imageUrl } = req.body;

  try {
    const newProduct = new Product({ name, price, description, imageUrl });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
