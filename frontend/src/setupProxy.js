const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
        target: "https://sahisti-lii1.onrender.com/",
        changeOrigin: true,
    })
  );
};