const express = require('express');
const router = express.Router();
const Category = require('../models/Category');
const Product = require('../models/Product');

router.post('/', async (req, res) => {
  try {
    const { name, icon } = req.body;
    const category = new Category({ name, icon });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar categoria' });
  }
});

router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar categorias' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, icon } = req.body;
    const category = await Category.findByIdAndUpdate(req.params.id, { name, icon }, { new: true });
    res.json(category);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao editar categoria' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: 'Categoria deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar categoria' });
  }
});

router.get('/:name', async (req, res) => {
  try {
    const category = await Category.findOne({ name: req.params.name });
    if (!category) {
      return res.status(404).json({ error: 'Categoria não encontrada' });
    }

    const products = await Product.find();
    const filteredProducts = products.filter(product => product.category === category.name);
    res.json({ category, products: filteredProducts });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar categoria' });
  }
});

module.exports = router;
