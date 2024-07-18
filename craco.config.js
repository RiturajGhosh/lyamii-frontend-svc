const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        https: require.resolve("https-browserify"),
        http: false, // Disable http polyfill
        url: require.resolve("url/"),
      };
      return webpackConfig;
    },
  },
};
