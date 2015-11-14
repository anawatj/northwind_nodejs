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
	var isInsert=req.body.id==0;
	var sequelize = models.sequelize;
	sequelize.transaction({autocommit:false},function(t)
	{
			if(isInsert)
			{
				return models.Categories.create(
						req.body,
						{
							transaction:t

						}
					).then(function(ret)
					{
						t.commit();
						res.status(200).json(ret);
					});
			}else
			{
				return models.Categories.update(
						req.body
						,
						{
							where:
							{
								id:req.body.id
							},
							transaction:t
						}
					).then(function(ret)
					{
						t.commit();
						res.status(200).json(req.body);
					}).catch(function(err)
					{
						t.rollback();
						res.status(500).json(err);
					});
			}
	});

  
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