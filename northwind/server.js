var express = require('express');
var bodyParser  = require('body-parser');
var path = require('path');
var app = express();


var homes = require("./webapp/controllers/homeController");
var categories = require("./webapp/controllers/categoriesController");
var customers = require("./webapp/controllers/customersController");
var employees = require("./webapp/controllers/employeesController");
var orders = require("./webapp/controllers/ordersController");
var products = require("./webapp/controllers/productsController");
var shippers = require("./webapp/controllers/shippersController");
var suppliers = require("./webapp/controllers/suppliersController");
var masters = require("./webapp/controllers/mastersController");
app.get("/",function(req,res)
{
	res.send("Hello Northwind");

})

homes.use("/categories",categories);
homes.use("/customers",customers);
homes.use("/employees",employees);
homes.use("/orders",orders);
homes.use("/products",products);
homes.use("/shippers",shippers);
homes.use("/suppliers",suppliers);
homes.use("/masters",masters);
homes.use("/public", express.static(path.join(__dirname, 'public')));
homes.use("/node_modules",express.static(path.join(__dirname,"node_modules")));


app.use("/northwind",homes);
app.set('views', __dirname + '/webapp/views');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

var server = app.listen(9000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});