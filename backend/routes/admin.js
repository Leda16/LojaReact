const express = require('express');
const router = express.Router();
const { adminLogin } = require('../controllers/authController');
const { adminAuth } = require('../middleware/auth');

router.post('/login', adminLogin);

router.use(adminAuth);

router.get('/protected', (req, res) => {
  res.json({ msg: 'Você tem acesso a esta rota protegida' });
});

router.get('/dashboard', (req, res) => {
  res.json({ msg: 'Bem-vindo ao painel de administração!' });
});

router.get('/newsletter', (req, res) => {
  res.json({ msg: 'Esta é a página de newsletter protegida.' });
});

module.exports = router;
