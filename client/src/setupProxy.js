const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy("", {
      target: "http://api.isportsapi.com/sport/football/",
      secure:false,
      changeOrigin: true
    })
  )


app.use(
  proxy("", {
    target: "http://api.isportsapi.com/sport/football/",
    secure:false,
    changeOrigin: true
  })
  );
};
