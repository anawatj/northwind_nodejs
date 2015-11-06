"use strict";
module.exports=function(sequelize, DataTypes)
{
	var DemoGraphics = sequelize.define('DemoGraphics',
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
		table:"tbl_demographics"
	},
	{
    	classMethods: {
      		associate: function(models) {
        		DemoGraphics.belongToMany(models.Customers, {
          		through: 'tbl_customers_demographics'
        	});
      	}
    });
}