const webpack = require("webpack");

module.exports = {
  // Other configuration options...
  resolve: {
    fallback: {
      https: require.resolve("https-browserify"),
    },
  },
  // Other configuration options...
};
