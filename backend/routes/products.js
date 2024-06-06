const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

router.use(csrfProtection);

router.post('/', async (req, res) => {
  const { name, category, image, info, rating, price, stock } = req.body;

  try {
    const newProduct = new Product({
      name,
      category,
      image,
      info,
      rating,
      price,
      stock,
    });

    await newProduct.save();
    console.log('Produto criado com sucesso:', newProduct);

    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar produto.' });
    console.error('Erro ao criar produto:', err);

  }
});

module.exports = router;
