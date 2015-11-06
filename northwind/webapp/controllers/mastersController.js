var models  = require('../models');
var express = require('express');
var bodyParser  = require('body-parser');
var mastersController = express.Router();


mastersController.use(bodyParser.urlencoded());
mastersController.use(bodyParser.json());
mastersController.use(bodyParser.urlencoded({
  extended: true
}));

mastersController.get('/',function(req,res)
{
	res.send("this is master");
});
mastersController.get("/regions/all",function(req,res)
{
	models.Regions.findAll()
	.then(function(regions)
	{
		res.json(regions);
	});
});
module.exports = mastersController;