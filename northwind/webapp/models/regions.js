"use strict";
module.exports=function(sequelize, DataTypes)
{
	var Regions = sequelize.define('Regions',
	{
		id:
		{
			type:DataTypes.INTEGER,
			name:"id"
		},
		name:
		{
			type:DataTypes.STRING,
			name:"name"
		}
	},
	{
		tableName:"tbl_regions"
	})
}