const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const csurf = require('csurf');
const connectDB = require('./db');
const cors = require('cors');

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
  next();
});

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

app.use('/api/newsletter', newsletterRoute);
app.use('/api/newsletterRoutes', newsletterRoutes);
app.use('/api/admin', loginLimiter, adminRoute);
app.use('/api/products', productsRoute);
app.use('/api/categories', categoriesRoute);
app.use('/api/user/categories', require('./routes/userCategories'));
app.use('/api/user/products', require('./routes/userProducts'));

app.get('/api/csrf-token', (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

app.post('/api/admin/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
