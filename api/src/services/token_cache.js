var cache = require('memory-cache');

const TOKEN_KEY = "token";
const EMAIL_KEY = "email";

module.exports = {
  getToken: () => {
    return cache.get(TOKEN_KEY);
  },

  setToken: (token) => {
    cache.put(TOKEN_KEY, token);
  },

  getEmail: () => {
    return cache.get(EMAIL_KEY);
  },

  setEmail: (email) => {
    cache.put(EMAIL_KEY, email);
  }
}
