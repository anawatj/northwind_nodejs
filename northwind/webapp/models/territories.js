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
			timestamps: false,
			classMethods: {
      		associate: function(models) {
        		Territories.belongsTo(models.Regions,{foreignKey:"region_id"});
        		Territories.belongsToMany(models.Employees,{through:models.EmployeeTerritories,foreignKey:"territory_id"});
      	}
	}
});
	return Territories;
}