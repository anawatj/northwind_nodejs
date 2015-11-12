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
	res.json({});
});
customersController.post("/save",function(req,res)
{

		
		/*	models.Customers.upsert(req.body)
			.then(function(ret)
			{
				res.json(ret);
			});*/
	if(req.body.id==0)
	{
		models.Customers.create(req.body)
		.then(function(customer )
		{
			for(var index=0;index<req.body.demographics.length;index++)
			{
					var item = req.body.demographics[index];
					models.CustomerDemographics
					.create(
								{
									customerId:customer.id,
									customerTypeId:item.id
								}
							).then(function(demographic)
							{

							});
					res.json(customer);

			}
		});
	}else
	{
		models.Customers.update(req.body,
		{
			where:
			{
				id:req.body.id
			}
		}).then(function(ret)
		{
			/*for(var index=0;index<req.body.demographics.length;index++)
			{
				var item =
			}*/
		});
	}
			
		
	
	
	
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
	res.json({});
});
module.exports= customersController;