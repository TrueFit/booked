'use strict';

const auth = require('../services/ms_auth.js');
const tokenCache = require('../services/token_cache.js');

module.exports = {
  get: (req, res) => {
    const tokenExists = tokenCache.getToken() ? true : false;

    if (tokenExists) {
      const model = {
        email: tokenCache.getEmail()
      };

      res.render('index_token_exists', model);
    }
    else {
      const model = {
        url: auth.generate_auth_url()
      };

      res.render('index_auth', model);
    }
  }
}
