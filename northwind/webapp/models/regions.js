"use strict";
module.exports=function(sequelize, DataTypes)
{
	var Regions = sequelize.define('Regions',
	{
		
		regionName:
		{
			type:DataTypes.STRING,
			field:"region_name"
		}
	},
	{
		tableName:"tbl_regions",
		timestamps: false
	});
	return Regions;
}