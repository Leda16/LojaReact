const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const csrfProtection = require('../middleware/csurf');

router.post('/add', csrfProtection, async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.cookies['_authLogged'];

  if (!userId) {
    return res.status(401).json({ msg: 'Usuário não autenticado' });
  }

  try {
    let cart = await Cart.findOne({ userId: userId });
    if (!cart) {
      cart = new Cart({ userId: userId, items: [] });
    }

    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (err) {
    console.error('Erro ao adicionar item ao carrinho:', err);
    res.status(500).json({ msg: 'Erro ao adicionar item ao carrinho' });
  }
});

module.exports = router;
