const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://sahistiprogi-env.eba-qihmse7y.eu-central-1.elasticbeanstalk.com",
      changeOrigin: true,
    })
  );
};