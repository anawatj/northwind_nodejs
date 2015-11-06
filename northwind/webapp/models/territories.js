"use strict";
module.exports=function(sequelize, DataTypes)
{
	var Territories = sequelize.define('Territories',
	{
		id:
		{
			type:DataTypes.INTEGER,
			name:"id"
		},
		name:{
			type:DataTypes.STRING,
			name:"name"
		},
		regionId:{
			type:DataTypes.INTEGER,
			name:"region_id"
		}
	},
	{
		tableName:"tbl_territories"
	},
	{
			classMethods: {
      		associate: function(models) {
        		Territories.belongTo(models.Regions,{});
      	}
	})
}