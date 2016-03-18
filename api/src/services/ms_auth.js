'use strict';

const oauth2 = require("simple-oauth2")({
  clientID: process.env.APP_ID,
  clientSecret: process.env.SECRET,
  site: "https://login.microsoftonline.com/common",
  authorizationPath: "/oauth2/v2.0/authorize",
  tokenPath: "/oauth2/v2.0/token"
});

var returnUrl = "http://localhost:3001/auth_return";
var scopes = [ "openid", "https://outlook.office.com/calendars.read" ];

module.exports = {
  generate_auth_url: () => {
    return oauth2.authCode.authorizeURL({
      redirect_uri: returnUrl,
      scope: scopes.join(" ")
    });
  },

  getTokenFromCode: (authCode) => {
    const opts = {
      code: authCode,
      redirect_uri: returnUrl,
      scope: scopes.join(" ")
    };

    return new Promise((resolve, reject) => {
      oauth2.authCode.getToken(opts, (err, result) => {
        if (err) {
          reject(err);
          return;
        }

        const token = oauth2.accessToken.create(result);
        resolve(token);
      });
    });
  }
};
