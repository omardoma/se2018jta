const express = require('express'),
  router = express.Router(),
  authCtrl = require('../controllers/AuthController');

router.route('/login').get(authCtrl.renderLogin);
router.route('/welcome/:username').get(authCtrl.renderWelcome);

module.exports = router;
