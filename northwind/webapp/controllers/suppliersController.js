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