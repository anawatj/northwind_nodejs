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
		tableName:"tbl_territories",
		timestamps: false
	},
	{
			classMethods: {
      		associate: function(models) {
        		Territories.belongTo(models.Regions,{forignKey:"region_id"});
        		Territories.hasMany(models.Employees,{through:models.EmployeeTerritories,forignKey:"territory_id"});
      	}
	}
});
	return Territories;
}