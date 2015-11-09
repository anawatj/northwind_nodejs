"use strict";
module.exports=function(sequelize, DataTypes)
{
	var Shippers=sequelize.define('Shippers',
	{
		companyName:
		{
			type:DataTypes.STRING,
			field:"company_name"
		},
		phone:
		{
			type:DataTypes.STRING,
			field:"phone"
		}
	},
	{
		tableName:"tbl_shippers",
		timestamps: false
	});
	return Shippers;
}