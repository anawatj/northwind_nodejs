"use strict";
module.exports=function(sequelize, DataTypes)
{
	var Categories =sequelize.define('Categories',
	{
		
		categoryName:
		{
			type:DataTypes.STRING,
			field:'category_name'

		},
		description:
		{
			type:DataTypes.STRING,
			field:"description"
		}
	},
	{
		tableName:"tbl_categories"
	});
	return Categories;
}