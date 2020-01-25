var express = require("express");
var app = express();
var fs = require("fs");
var port = process.env.port || 9800;
var moviesRouter = require("./src/routes/moviesRouter");
var productRouter = require("./src/routes/productRouter");

app.get("/", (req, res) => {
  res.send("This is default page");
});

app.use("/movies", moviesRouter);
app.use("/product", productRouter);

app.listen(port, err => {
  if (err) throw err;
  console.log("Express is listening at port ", port);
});
