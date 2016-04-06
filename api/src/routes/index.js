'use strict';

const auth = require('../services/ms_auth.js');
const tokenCache = require('../services/token_cache.js');

module.exports = {
  get: (req, res) => {
    const token = tokenCache.getToken();

    if (token) {
      const model = {
        email: tokenCache.getEmail(),
        token: token.token.access_token
      };

      res.render('index_token_exists', model);
      return;
    }

    const access_token = process.env.ACCESS_TOKEN;
    if (access_token) {
      const model = {
        token: access_token
      };

      res.render('index_access_token_specified', model);
      return;
    }

    else {
      const model = {
        url: auth.generate_auth_url()
      };

      res.render('index_auth', model);
    }
  }
}
