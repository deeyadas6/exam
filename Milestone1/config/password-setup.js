// config/passport-setup.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const keys = require('./keys');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  done(null, id);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // Handle user authentication and database operations
      return done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebook.appID,
      clientSecret: keys.facebook.appSecret,
      callbackURL: '/auth/facebook/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // Handle user authentication and database operations
      return done(null, profile);
    }
  )
);
