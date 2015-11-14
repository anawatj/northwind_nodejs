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
	//var sequelize = models.sequelize;
	var customer = models.Customers.build({
    companyName:"11",
    demographics:
    [
      {id:1,demographicName:"Demo1"},
      {id:2,demographicName:"Demo2"}
    ]
  },
  {
    include:[{model:models.DemoGraphics,as:"demographics"}]
  });
  customer.save();
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

	models.Customers.findAll(
	{
		include:[{ model:models.DemoGraphics,as:"demographics" }]
	}).then(function(customers)
	{
		res.json(customers);
	});
});
customersController.get("/single",function(req,res)
{
	models.Customers.findAll
	(
		{
			include:[{model:models.DemoGraphics,as:"demographics"}],
			where:
			{
				id:req.query.id
			}
		}
	).then(function(results)
	{
		res.status(200).json(results[0]);
	});
});
customersController.post("/save",function(req,res)
{
	var isInsert=req.body.id==0;
	var sequelize = models.sequelize;
	sequelize.transaction({autocommit:false},function(t)
	{
			
			var customer = models.Customers.build(req.body,
			{
				isNewRecord:isInsert,
				include:[{model:models.DemoGraphics,as:"demographics"}]
			});


			return customer.save(
			{
				transaction:t
			}).then(function(ret)
			{
				res.status(200).json(ret);
			}).catch(function(err)
			{
				t.rollback();
				res.status(500).json(err);
			})
			
	});


			
		

	
	
	
});
customersController.post("/search",function(req,res)
{
	if(req.body.companyName==undefined)
	{
		req.body.companyName="";
	}
	if(req.body.contactName==undefined)
	{
		req.body.contactName="";
	}
	if(req.body.contactTitle==undefined)
	{
		req.body.contactTitle="";
	}
	if(req.body.city==undefined)
	{
		req.body.city="";
	}
	if(req.body.region==undefined)
	{
		req.body.region="";
	}
	if(req.body.country==undefined)
	{
		req.body.country="";
	}
	models.Customers.findAll(
	{
		where:
		{
			companyName:
			{
				$like:'%'+req.body.companyName+'%'
			},
			contactName:
			{
				$like:'%'+req.body.contactName+'%'
			},
			contactTitle:
			{
				$like:'%'+req.body.contactTitle+'%'
			},
			city:
			{
				$like:'%'+req.body.city+'%'
			},
			region:
			{
				$like:'%'+req.body.region+'%'
			},
			country:
			{
				$like:'%'+req.body.country+'%'
			}
		},
		attributes:['id','companyName','contactName','contactTitle','city','region','country']
	}).then(function(customers)
	{
		res.json(customers);
	});
})
customersController.delete("/delete",function(req,res)
{
	var isInsert=req.body.id==0;
	var sequelize = models.sequelize;
	sequelize.transaction({autocommit:false},function(t)
	{
		return models.Customers.destroy(
		{
			where:
			{
				id:req.query.id
			},
			transaction:t,
			cascade:true
		}).then(function()
		{
			t.commit();
			res.status(200).json(true);
		}).catch(function(err)
		{
			t.rollback();
			res.status(500).json(err);
		});
	});
});
module.exports= customersController;