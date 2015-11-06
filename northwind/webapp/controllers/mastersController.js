var express = require('express');
var bodyParser  = require('body-parser');
var mastersController = express.Router();
var models  = require('../models');

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
	models.Regions.findAll().on("success",function(regions)
	{
		res.json(regions);
	})
});
module.exports = mastersController;