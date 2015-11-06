var express = require('express');
var bodyParser  = require('body-parser');
var customersController = express.Router();


customersController.use(bodyParser.urlencoded());
customersController.use(bodyParser.json());
customersController.use(bodyParser.urlencoded({
  extended: true
}));
/***************************
*  Init Controller
****************************/
customersController.get('/',function(req,res)
{
	res.send("Categories");
});
/*************************
* Api Function
**************************/
customersController.get("/all",function(req,res)
{
	res.json([]);
});
customersController.get("/single",function(req,res)
{
	res.json({});
});
customersController.post("/save",function(req,res)
{
	res.json({});
});
customersController.delete("/delete",function(req,res)
{
	res.json({});
});
module.exports= customersController;