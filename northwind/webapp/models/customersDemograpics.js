"use strict";
module.exports=function(sequelize, DataTypes)
{
	var CustomerDemographics=sequelize.define('CustomerDemographics',
	  {
    
    	customerId:
    	{
    		type:DataTypes.INTEGER,
    		field:"customer_id",
            primaryKey: true,
          autoIncrement: false,
    	},
    	customerTypeId:
    	{
    		type:DataTypes.INTEGER,
    		field:"customer_type_id",
        primaryKey: true,
        autoIncrement: false,
    	}
	},
	{
		tableName:"tbl_customers_demographics",
		timestamps: false
	});
	return CustomerDemographics;
}