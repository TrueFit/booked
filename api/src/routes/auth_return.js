'use strict';

const auth = require('../services/ms_auth.js');
const tokenCache = require('../services/token_cache.js');

module.exports = {
  get: (req, res) => {
    auth.getTokenFromCode(req.query.code).then((token) => {

      tokenCache.setToken(token);
      tokenCache.setEmail('calendar-bot@truefitinnovation.com');

      res.redirect('/');
    }).catch((err) => {
      console.log(err);
    });
  }
};
