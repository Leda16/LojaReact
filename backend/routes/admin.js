const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const auth = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);

router.use(auth);

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
