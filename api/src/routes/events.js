'use strict';

const _ = require('underscore');
const outlook = require("node-outlook");
const tokenCache = require("../services/token_cache.js");

module.exports = {
  get: (req, res) => {
    outlook.base.setApiEndpoint('https://outlook.office.com/api/v2.0');

    const accessToken = tokenCache.getToken().token.access_token;
    const calendarsParams = {
      url: 'https://outlook.office.com/api/v2.0/me/calendars',
      token: accessToken
    };

    outlook.base.makeApiCall(calendarsParams, (err, result) => {
      if (err) {
        next(err);
        return;
      }

      const calendar = _.find(result.body.value, c => c.Name == "Calendar");
      if (!calendar) {
        res.json("sad panda");
        return;
      }

      const eventParams = {
        token: accessToken,
        useMe: true,
        calendarId: calendar.Id
      };

      outlook.calendar.getEvents(eventParams, (err, result) => {
        if (err) {
          next(err);
          return;
        }

        console.log(result.value);

        res.json('hi');

      });
    });
  }
};
