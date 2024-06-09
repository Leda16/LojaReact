const express = require('express');
const router = express.Router();
const User = require('../models/Client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

router.post('/register', async (req, res) => {
  const { cpf, email, password, name, birthDate } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ cpf }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'CPF ou Email já está em uso' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      cpf,
      email,
      password: hashedPassword,
      name,
      birthDate
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id, role: 'client' }, secret, { expiresIn: '1h' });

    res.status(201).json({ token, user: { id: newUser._id, name: newUser.name } });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao registrar usuário' });
  }
});

router.post('/login', async (req, res) => {
  const { cpfOrEmail, password } = req.body;

  try {
    const user = await User.findOne({ $or: [{ cpf: cpfOrEmail }, { email: cpfOrEmail }] });
    if (!user) {
      return res.status(400).json({ error: 'Usuário não encontrado' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Senha incorreta' });
    }

    const token = jwt.sign({ userId: user._id, role: 'client' }, secret, { expiresIn: '1h' });

    res.cookie('_authLogged', user._id.toString(), { httpOnly: true, secure: false, maxAge: 3600000 }); // 1 hora
    res.status(200).json({ token, user: { id: user._id, name: user.name } });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});

module.exports = router;
