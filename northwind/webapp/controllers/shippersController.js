var express = require('express');
var bodyParser  = require('body-parser');
var shippersController = express.Router();


shippersController.use(bodyParser.urlencoded());
shippersController.use(bodyParser.json());
shippersController.use(bodyParser.urlencoded({
  extended: true
}));
/***************************
*  Init Controller
****************************/
shippersController.get('/',function(req,res)
{
	res.send("Categories");
});
/*************************
* Api Function
**************************/
shippersController.get("/all",function(req,res)
{
	res.json([]);
});
shippersController.get("/single",function(req,res)
{
	res.json({});
});
shippersController.post("/save",function(req,res)
{
	res.json({});
});
shippersController.delete("/delete",function(req,res)
{
	res.json({});
});
module.exports= shippersController;