'use strict';

const _ = require('underscore');
const outlook = require("node-outlook");
const tokenCache = require("../services/token_cache.js");

const getAccessToken = () => {
  const token = tokenCache.getToken();
  if (token) {
    return token.token.access_token;
  }

  return process.env.ACCESS_TOKEN;
};

module.exports = {
  get: (req, res) => {
    // check for access token
    const accessToken = getAccessToken();
    if (!accessToken) {
      res.sendStatus(500);
      return;
    }

    // configure end point
    outlook.base.setApiEndpoint('https://outlook.office.com/api/v2.0');
    const calendarsParams = {
      url: 'https://outlook.office.com/api/v2.0/users/carver@truefit.io/calendars',
      token: accessToken
    };

    outlook.base.makeApiCall(calendarsParams, (err, result) => {
      if (err) {
        next(err);
        return;
      }



      console.log(result);
      res.json({msg:"hi"});

      // const calendar = _.find(result.body.value, c => c.Name == "Calendar");
      // if (!calendar) {
      //   res.json("sad panda");
      //   return;
      // }
      //
      // const eventParams = {
      //   token: accessToken,
      //   useMe: true,
      //   calendarId: calendar.Id
      // };
      //
      // outlook.calendar.getEvents(eventParams, (err, result) => {
      //   if (err) {
      //     next(err);
      //     return;
      //   }
      //
      //   console.log(result.value);
      //
      //   res.json({msg:'hi'});
      //
      // });
    });
  }
};
