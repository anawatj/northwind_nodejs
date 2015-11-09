var models  = require('../models');
var express = require('express');
var bodyParser  = require('body-parser');
var suppliersController = express.Router();


suppliersController.use(bodyParser.urlencoded());
suppliersController.use(bodyParser.json());
suppliersController.use(bodyParser.urlencoded({
  extended: true
}));
/****
/***************************
*  Init Controller
****************************/
suppliersController.get('/',function(req,res)
{
	res.send("Categories");
});
suppliersController.get("/list",function(req,res)
{
	res.render("suppliers/list.html");
});
suppliersController.get("/entry",function(req,res)
{
	res.render("suppliers/entry.html");
})
/*************************
* Api Function
**************************/
suppliersController.get("/all",function(req,res)
{
	res.json([]);
});
suppliersController.get("/single",function(req,res)
{
	res.json({});
});
suppliersController.post("/save",function(req,res)
{
	res.json({});
});
suppliersController.delete("/delete",function(req,res)
{
	res.json({});
});
module.exports= suppliersController;