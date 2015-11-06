"use strict";
module.exports=function(sequelize, DataTypes)
{
	var Categories =sequelize.define('Categories',
	{
		id:
		{
				type:DataTypes.STRING,
				name:"id"
		},
		name:
		{
				type:DataTypes.STRING,
				name:"name"
		},
		description:
		{
				type:DataTypes.STRING,
				name:"description"
		}
	},
	{
		tableName:"tbl_categories"
	})
}