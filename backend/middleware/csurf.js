const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

module.exports = function (req, res, next) {
  const csrfToken = req.cookies['XSRF-TOKEN'];
  console.log('CSRF Token recebido:', csrfToken);

  if (!csrfToken) {
    return res.status(401).json({ msg: 'Nenhum token CSRF, autorização negada' });
  }

  try {
    csrfProtection(req, res, next);
  } catch (err) {
    console.error('Erro na verificação do token CSRF:', err);
    res.status(401).json({ msg: 'Token CSRF inválido' });
  }
};
