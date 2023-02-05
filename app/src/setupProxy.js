const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://calm-smoke-0cbb30f00.2.azurestaticapps.net",
      changeOrigin: true,
    })
  );
};
