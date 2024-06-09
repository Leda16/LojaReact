const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const connectDB = require('./db');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();

const app = express();

connectDB();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const csrfProtection = csurf({ cookie: true });

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsOptions));

app.use(csrfProtection);

app.use((req, res, next) => {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  console.log('CSRF Token:', req.csrfToken());
  next();
});

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Ajustar para 'true' em produção com HTTPS
}));

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Muitas tentativas de login. Por favor, tente novamente mais tarde.'
});

const newsletterRoute = require('./routes/newsletter');
const adminRoute = require('./routes/admin');
const newsletterRoutes = require('./routes/newsletterRoutes');
const productsRoute = require('./routes/products');
const categoriesRoute = require('./routes/categories');
const authClient = require('./routes/auth');
const cartRoute = require('./routes/cart');

app.use('/api/newsletter', newsletterRoute);
app.use('/api/newsletterRoutes', newsletterRoutes);
app.use('/api/admin', loginLimiter, adminRoute);
app.use('/api/products', productsRoute);
app.use('/api/categories', categoriesRoute);
app.use('/api/auth', authClient);
app.use('/api/cart', cartRoute);
app.use('/api/user/categories', require('./routes/userCategories'));
app.use('/api/user/products', require('./routes/userProducts'));

app.get('/api/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
