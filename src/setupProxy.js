const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/v1",
    createProxyMiddleware({
      // target: "https://backend.lyamii.com",
      target:"http://localhost:8081",
      changeOrigin: true,
      secure: false,
    })
  );
};
