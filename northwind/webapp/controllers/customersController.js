var models  = require('../models');
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
customersController.get('/list',function(req,res)
{
	res.render('customers/list.html');
});
customersController.get("/entry",function(req,res)
{
	res.render("customers/entry.html");
})
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
	if(req.body.id==0)
	{
		models.Customers.create(req.body,
			{include:[models.DemoGraphics]})
		.then(function(ret)
		{
			res.json(ret);
		});
	}
});
customersController.delete("/delete",function(req,res)
{
	res.json({});
});
module.exports= customersController;