var express = require("express");
var fs = require("fs");
var productRouter = express.Router();

productRouter.route("/").get((req, res) => {
  fs.readFile("prod.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

productRouter.route("/details").get((req, res) => {
  res.send("This is Product Details page");
});

module.exports = productRouter;
