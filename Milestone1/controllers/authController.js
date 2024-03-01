const passport = require('passport');

exports.authenticate = (req, res, next) => {
  passport.authenticate('google', { scope: ['profile', 'email'] })(req, res, next);
};

exports.callback = (req, res, next) => {
  passport.authenticate('google', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
  })(req, res, next);
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect('/');
};
