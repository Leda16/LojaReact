const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Email = require('../models/NewsletterEmail');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

router.post('/send', async (req, res) => {
  const { emails, message } = req.body;

  const sendEmail = (email) => {
    return new Promise((resolve, reject) => {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Newsletter TechStore',
        text: message
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error);
        } else {
          resolve(info.response);
        }
      });
    });
  };

  try {
    await Promise.all(emails.map(emailObj => sendEmail(emailObj.email)));
    res.status(200).json({ msg: 'Todos os emails foram enviados com sucesso!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao enviar alguns emails' });
  }
});

router.get('/emails', async (req, res) => {
  try {
    const emails = await Email.find({});
    res.json(emails);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao buscar emails' });
  }
});

module.exports = router;
