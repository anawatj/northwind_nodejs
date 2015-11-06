"use strict";
module.exports=function(sequelize, DataTypes)
{
	var OrderDetails=sequelize.define('OrderDetails',
	{
		quantity:
		{
			type:DataTypes.INTEGER,
			field:"quantity"
		},
		unitPrice:
		{
			type:DataTypes.DOUBLE,
			field:"unit_price"
		},
		discount:
		{
			type:DataTypes.DOUBLE,
			field:"discount"
		}
	},
	{
		tableName:"tbl_order_details"
	},
	{
		classMethods:
		{
			associate:function(models)
			{
				OrderDetails.belongTo(models.Products,{forignKey:"product_id"});
			}
		}
	});
	return OrderDetails;
}