var express = require('express');
var bodyParser  = require('body-parser');
var employeesController = express.Router();


employeesController.use(bodyParser.urlencoded());
employeesController.use(bodyParser.json());
employeesController.use(bodyParser.urlencoded({
  extended: true
}));
/***************************
*  Init Controller
****************************/
employeesController.get('/',function(req,res)
{
	res.send("Categories");
});
/*************************
* Api Function
**************************/
employeesController.get("/all",function(req,res)
{
	res.json([]);
});
employeesController.get("/single",function(req,res)
{
	res.json({});
});
employeesController.post("/save",function(req,res)
{
	res.json({});
});
employeesController.delete("/delete",function(req,res)
{
	res.json({});
});
module.exports= employeesController;