const path = require("path");

module.exports = function({ config }) {

  config.watchOptions = {
      aggregateTimeout: 300,
      poll: 1000
  };

  return config;
};
