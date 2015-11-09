var models  = require('../models');
var express = require('express');
var bodyParser  = require('body-parser');
var ordersController = express.Router();


ordersController.use(bodyParser.urlencoded());
ordersController.use(bodyParser.json());
ordersController.use(bodyParser.urlencoded({
  extended: true
}));

/***************************
*  Init Controller
****************************/
ordersController.get('/',function(req,res)
{
	res.send("Categories");
});
ordersController.get("/list",function(req,res)
{
	res.render('orders/list.html');
});
ordersController.get("/entry",function(req,res)
{
	res.render("orders/entry.html");
})
/*************************
* Api Function
**************************/
ordersController.get("/all",function(req,res)
{
	res.json([]);
});
ordersController.get("/single",function(req,res)
{
	res.json({});
});
ordersController.post("/save",function(req,res)
{
	res.json({});
});
ordersController.delete("/delete",function(req,res)
{
	res.json({});
});
module.exports= ordersController;