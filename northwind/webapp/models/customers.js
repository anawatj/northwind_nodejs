"use strict";
module.exports=function(sequelize, DataTypes)
{


	var Customers = sequelize.define('Customers',
	{
		id:
		{
			type:DataTypes.INTEGER,
			name:"id"
		},
		companyName:
		{
			type:DataTypes.STRING
			name:"company_name"
		},
		contactName:
		{
			type:DataTypes.STRING,
			name:"contact_name"
		},
		contactTitle:
		{
			type:DataTypes.STRING,
			name:"contact_title"
		},
		address:
		{
			type:DataTypes.STRING,
			name:"address"
		},
		city:
		{
			type:DataTypes.STRING,
			name:"city"
		},
		region:
		{
			type:DataTypes.STRING,
			name:"region"
		},
		postalCode:
		{
			type:DataTypes.STRING,
			name:"postal_code"
		},
		country:
		{
			type:DataTypes.STRING,
			name:"country"
		},
		phone:
		{
			type:DataTypes.STRING,
			name:"phone"
		},
		fax:
		{
			type:DataTypes.STRING,
			name:"fax"
		}
	},
	{
    	classMethods: {
      		associate: function(models) {
        		Customers.belongToMany(models.DemoGraphics, {
          		through: 'tbl_customers_demographics'
        	});
      	}
    },
	{
		tableName:"tbl_customers"
	});


}