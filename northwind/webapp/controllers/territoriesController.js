var models  = require('../models');
var express = require('express');
var bodyParser  = require('body-parser');
var territoriesControllers = express.Router();


territoriesControllers.use(bodyParser.urlencoded());
territoriesControllers.use(bodyParser.json());
territoriesControllers.use(bodyParser.urlencoded({
  extended: true
}));

territoriesControllers.get('/',function(req,res)
{
	res.send("Hello Territories");
});
territoriesControllers.get("/list",function(req,res)
{
	res.send("list");
});
territoriesControllers.get("/entry",function(req,res)
{
	res.render('territories/entry.html');
});
territoriesControllers.get("/all",function(req,res)
{
	res.json([]);
});
territoriesControllers.get("/single",function(req,res)
{
	res.json({});
});
territoriesControllers.post('/save',function(req,res)
{
	if(req.body.id==0)
	{
		models.Territories.create(req.body)
		.then(function(territory)
		{
			res.json(territory);
		})
	}
});
territoriesControllers.post("/search",function(req,res)
{
	res.json([]);
});
territoriesControllers.delete('/delete',function(req,res)
{
	res.json({});
});
module.exports= territoriesControllers;