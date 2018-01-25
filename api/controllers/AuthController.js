const config = require('../config/config');

module.exports.renderLogin = (req, res) => {
  res.render('login', {
    fbAppId: config.FB_APP_ID,
    FIREBASE_API_KEY: config.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: config.FIREBASE_AUTH_DOMAIN
  });
};

module.exports.renderWelcome = (req, res) => {
  res.render('welcome', {
    fbAppId: config.FB_APP_ID,
    FIREBASE_API_KEY: config.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: config.FIREBASE_AUTH_DOMAIN,
    username: req.params.username
  });
};
