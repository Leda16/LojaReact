const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    console.log('Buscando produto com ID:', req.params.id); // Debug
    const product = await Product.findById(req.params.id);
    if (!product) {
      console.log('Produto não encontrado com ID:', req.params.id); // Debug
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    console.log('Produto encontrado:', product); // Debug
    res.json(product);
  } catch (err) {
    console.error('Erro ao buscar produto:', err); // Debug
    res.status(500).json({ error: 'Erro ao buscar produto' });
  }
});

module.exports = router;
