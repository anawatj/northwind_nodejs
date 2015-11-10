var models  = require('../models');
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
categoriesController.get("/list",function(req,res)
{
	res.render("categories/list.html");
});
categoriesController.get("/entry",function(req,res)
{
	res.render("categories/entry.html");
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
		var key = req.query.id;
		console.log(key);
		models.Categories.findAll({
			where:{
				id:key
			}
		}).then(function(result)
		{
			if(result.length==0)
			{
				var ret = 
				{
					id:0,
					categoryName:"",
					description:"",
					createAt:new Date(),
					updateAt:new Date()
				};
				res.json(ret);
			}else
			{
				res.json(result[0]);
			}
		});
});
categoriesController.post("/save",function(req,res)
{
	if(req.body.id==0)
	{
		models.Categories.create(req.body)
		.then(function(ret)
		{
			res.json(ret);
		});
	}else
	{
		models.Categories.update(
		{
			
			categoryName:req.body.categoryName,
			description:req.body.description/*,
			updateAt : new Date()*/
		},
		{
			where:
			{
				id:req.body.id
			}
		}).then(function(result)
		{
			models.Categories.findAll(
			{
				where:
				{
					id:req.body.id
				}
			}).then(function(ret)
			{
				res.json(ret[0]);
			});
		});
	}

  
});
categoriesController.post("/search",function(req,res)
{
		if(req.body.categoryName==undefined)
		{
			req.body.categoryName="";
		}
		models.Categories.findAll(
				{
					where:
					{
						categoryName:
						{
							$like:'%'+req.body.categoryName+'%'
						}
					}
				}
			).then(function(results)
			{
					res.json(results);
			});
});
categoriesController.delete("/delete",function(req,res)
{
	models.Categories.destroy(
	{
		where :
		{
			id:req.query.id
		}
	}).then(function()
	{
		res.json(true);
	})
});
module.exports= categoriesController;