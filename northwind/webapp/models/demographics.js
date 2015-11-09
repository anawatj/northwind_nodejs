"use strict";
module.exports=function(sequelize, DataTypes)
{
	var DemoGraphics = sequelize.define('DemoGraphics',
	{
		
		demographicName:
		{
			type:DataTypes.STRING,
			field:"demographic_name"
		}
	},
	{
		tableName:"tbl_demographics",
		timestamps: false
	},
	{
    	classMethods: {
      			associate: function(models) {
        			DemoGraphics.belongToMany(models.Customers, {
          			through: models.CustomerDemographics,
          			foreignKey: 'customer_type_id'
        		});
      		}
      	}
     });
    	
    return DemoGraphics;
}