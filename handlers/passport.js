const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const InstagramStrategy = require('passport-instagram').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new InstagramStrategy(
  {
    clientID: process.env.INSTAGRAM_ID,
    clientSecret: process.env.INSTAGRAM_SECRET,
    callbackURL: `${process.env.DOMAIN}/auth/instagram/callback`
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOneAndUpdate(
      {
        instagramId: profile.id
      },
      {
        instagramId: profile.id,
        instagramToken: accessToken
      },
      {
        new: true,
        runValidators: true,
        upsert: true,
        setDefaultsOnInsert: true
      },
      function(err, user) {
        return done(err, user);
      }
    );
  }
));