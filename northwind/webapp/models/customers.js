"use strict";
module.exports=function(sequelize, DataTypes)
{


	var Customers = sequelize.define('Customers',
	{
		
		companyName:
		{
			type:DataTypes.STRING,
			field:"company_name"
		},
		contactName:
		{
			type:DataTypes.STRING,
			field:"contact_name"
		},
		contactTitle:
		{
			type:DataTypes.STRING,
			field:"contact_title"
		},
		address:
		{
			type:DataTypes.STRING,
			field:"address"
		},
		city:
		{
			type:DataTypes.STRING,
			field:"city"
		},
		region:
		{
			type:DataTypes.STRING,
			field:"region"
		},
		postalCode:
		{
			type:DataTypes.STRING,
			field:"postal_code"
		},
		country:
		{
			type:DataTypes.STRING,
			field:"country"
		},
		phone:
		{
			type:DataTypes.STRING,
			field:"phone"
		},
		fax:
		{
			type:DataTypes.STRING,
			field:"fax"
		}
	},
	{
		tableName:"tbl_customers",
		timestamps: false,
		classMethods:
		{
			associate:function(models)
			{
				Customers.belongsToMany(models.DemoGraphics,{through:models.CustomerDemographics,foreignKey:"customer_id",as:"demographics",onDelete: 'cascade',onUpdate:'CASCADE'})
			}
		}
	}
	);

	return Customers;
}