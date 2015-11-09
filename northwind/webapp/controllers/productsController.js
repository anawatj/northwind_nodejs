var models  = require('../models');
var express = require('express');
var bodyParser  = require('body-parser');
var productsController = express.Router();


productsController.use(bodyParser.urlencoded());
productsController.use(bodyParser.json());
productsController.use(bodyParser.urlencoded({
  extended: true
}));
/***************************
*  Init Controller
****************************/
productsController.get('/',function(req,res)
{
	res.send("Categories");
});
productsController.get("/list",function(req,res)
{
	res.render('products/list.html');
});
productsController.get("/entry",function(req,res)
{
	res.render('products/entry.html');
});
/*************************
* Api Function
**************************/
productsController.get("/all",function(req,res)
{
	res.json([]);
});
productsController.get("/single",function(req,res)
{
	res.json({});
});
productsController.post("/save",function(req,res)
{
	res.json({});
});
productsController.delete("/delete",function(req,res)
{
	res.json({});
});
module.exports= productsController;