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
	models.Territories.findAll(
			{
				include:[models.Regions]
			}
		).then(function(territories)
		{
			res.json(territories);
		});
});
territoriesControllers.get("/single",function(req,res)
{
	models.Territories.findAll(
	{
		where:
		{
			id:req.query.id
		},
		include:[models.Regions]
	}).then(function(territories)
	{
		if(territories.length==1)
		{
			res.json(territories[0]);
		}else
		{
			res.json(
			{
				id:0,
				territoryName:"",
				regionId:undefined
			});
		}
	})
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
	}else
	{
		models.Territories.update(
		{
			territoryName:req.body.territoryName,
			regionId :req.body.regionId
		},
		{
			where:
			{
				id:req.body.id
			}
		}).then(function(territory)
		{
			res.json(req.body);
		});
	}
});
territoriesControllers.post("/search",function(req,res)
{
	if(req.body.territoryName==undefined)
	{
		req.body.territoryName="";
	}
	if(req.body.regionId==undefined)
	{
		req.body.regionId=null;
	}
	models.Territories.findAll(
			{
				where:
				{
						territoryName:
						{
							$like:'%'+req.body.territoryName+'%'
						},
						regionId:req.body.regionId
				},
				include:[models.Regions]
			}
		).then(function(territories)
		{
			res.json(territories);
		});

});
territoriesControllers.delete('/delete',function(req,res)
{
	res.json({});
});
module.exports= territoriesControllers;