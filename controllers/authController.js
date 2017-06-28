const passport = require('passport');

exports.loginWithInstagram = (req, res, next) => {
  res.json(`http${req.secure ? 's' : ''}://${req.headers.host}/auth/instagram/callback`);
  // passport.authenticate('instagram', {
  //   scope : ['comments'],
  //   callbackURL: `http${req.secure ? 's' : ''}://${req.headers.host}/auth/instagram/callback`
  // }) (req,res,next);
};

exports.loginWithInstagramCallback = passport.authenticate('instagram', {
  successRedirect : '/',
  successFlash: 'You have logged in successfully',
  failureRedirect : '/login',
  failureFlash: 'Login failed',
  callbackURL: '/auth/instagram/callback'
});

exports.logout = (req, res) => {
  req.logout();
  req.flash('success', 'You are now logged out');
  res.redirect('/');
};

exports.isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated() && req.user.instagramToken) {
    return next();
  }

  req.flash('error', 'You must be logged in!');
  res.redirect('/login');
};

