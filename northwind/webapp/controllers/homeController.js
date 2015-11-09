var models  = require('../models');
var express = require('express');
var bodyParser  = require('body-parser');
var homeController = express.Router();


homeController.use(bodyParser.urlencoded());
homeController.use(bodyParser.json());
homeController.use(bodyParser.urlencoded({
  extended: true
}));

homeController.get("/",function(req,res)
{
		res.render('index.html');
});
module.exports=homeController;