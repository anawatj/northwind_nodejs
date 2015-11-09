"use strict";
module.exports=function(sequelize, DataTypes)
{
	var Territories = sequelize.define('Territories',
	{
		
		territoryName:{
			type:DataTypes.STRING,
			field:"territory_name"
		},
		regionId:
		{
			type:DataTypes.INTEGER,
			field:"region_id"
		}
	},
	{
		tableName:"tbl_territories"
	},
	{
			classMethods: {
      		associate: function(models) {
        		Territories.belongTo(models.Regions,{forignKey:"region_id"});
        		Territories.belongToMany(models.Employees,{through:"tbl_employees_territories",forignKey:"territory_id"});
      	}
	}
});
	return Territories;
}