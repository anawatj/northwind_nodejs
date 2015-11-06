var express = require('express');
var bodyParser  = require('body-parser');
var categoriesController = express.Router();


categoriesController.use(bodyParser.urlencoded());
categoriesController.use(bodyParser.json());
categoriesController.use(bodyParser.urlencoded({
  extended: true
}));
/***************************
*  Init Controller
****************************/
categoriesController.get('/',function(req,res)
{
	res.send("Categories");
});
/*************************
* Api Function
**************************/
categoriesController.get("/all",function(req,res)
{
	res.json([]);
});
categoriesController.get("/single",function(req,res)
{
	res.json({});
});
categoriesController.post("/save",function(req,res)
{
	res.json({});
});
categoriesController.delete("/delete",function(req,res)
{
	res.json({});
});
module.exports= categoriesController;