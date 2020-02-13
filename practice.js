//code in app.js
const express = require("express");
const app = express();
const port = process.env.port || 8900;
const moviesRouter = require("./src/routes/moviesRouter");
const productRouter = require("./src/routes/productRouter");

app.get("/", (req, res) => {
  res.status(200).send("This is the default page of the application");
});

app.use("/movies", moviesRouter);
app.use("/product", productRouter);

app.listen(port, err => {
  if (err) throw err;
  console.log(`Server is listening at port ${port}`);
});

//code in moviesRouter
const fs = require("fs");
const express = require("express");
const moviesRouter = express.Router();

moviesRouter.route("/").get((req, res) => {
  fs.readFile("db.json", "utf-8", (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});

moviesRouter.route("/details").get((req, res) => {
  res.send("This is movies detail page");
});

module.exports = moviesRouter;

//code in product.js
const fs = require("fs");
const express = require("express");
const productRouter = express.Router();

productRouter.route("/").get((req, res) => {
  fs.readFile("prod.json", "utf-8", (err, result) => {
    if (err) throw err;
    res.status(200).send(result);
  });
});

productRouter.route("/details").get((req, res) => {
  res.status(200).send("This si the product details page");
});

module.exports = productRouter;
