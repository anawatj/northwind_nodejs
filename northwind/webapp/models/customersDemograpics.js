"use strict";
module.exports=function(sequelize, DataTypes)
{
	var CustomerDemographics=sequelize.define('CustomerDemographics',
	  {
    	customerId: {
      		type: DataTypes.INTEGER,
      		primaryKey: true,
      		autoIncrement: false,
      		field:"customer_id"
    		},
    	customerTypeId:
    	{
    		type:DataTypes.INTEGER,
    		primaryKey:true,
    		autoIncrement:false,
    		field:"customer_type_id"
    	}
	},
	{
		tableName:"tbl_customers_demographics",
		timestamps: false
	});
	return CustomerDemographics;
}