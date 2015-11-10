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
    		}
	},
	{
		tableName:"tbl_customers_demographics",
		timestamps: false
	});
	return CustomerDemographics;
}