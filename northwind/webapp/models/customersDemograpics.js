"use strict";
module.exports=function(sequelize, DataTypes)
{
	var CustomerDemographics=sequelize.define('CustomerDemographics',
	  {
    	id: {
      		type: DataTypes.INTEGER,
      		primaryKey: true,
      		autoIncrement: true,
      		field:"id"
    		},
    	customerId:
    	{
    		type:DataTypes.INTEGER,
    		field:"customer_id"
    	},
    	customerTypeId:
    	{
    		type:DataTypes.INTEGER,
    		field:"customer_type_id"
    	}
	},
	{
		tableName:"tbl_customers_demographics",
		timestamps: false
	});
	return CustomerDemographics;
}