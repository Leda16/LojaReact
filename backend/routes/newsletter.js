const express = require('express');
const router = express.Router();
const Email = require('../models/Email');
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

router.post('/', async (req, res) => {
  const { email } = req.body;

  try {
    let newEmail = new Email({ email });
    await newEmail.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmação de Inscrição nas Notícias da TechStore',
      text: `Olá!

Obrigado por se inscrever nas notícias da TechStore! Estamos muito felizes em tê-lo(a) conosco.

A partir de agora, você receberá as últimas novidades sobre nossos produtos, ofertas exclusivas, e promoções imperdíveis diretamente em seu email. Fique atento(a) para não perder nenhuma oportunidade de economizar e ficar por dentro das tendências tecnológicas.

Caso tenha qualquer dúvida ou precise de assistência, não hesite em entrar em contato conosco através do email suporte@techstore.com ou pelo WhatsApp: (11) 99922-1100.

Bem-vindo(a) à TechStore!

Atenciosamente,
Equipe TechStore`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Email enviado: ' + info.response);
    });

    res.status(201).json({ msg: 'Email registrado e confirmação enviada!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
