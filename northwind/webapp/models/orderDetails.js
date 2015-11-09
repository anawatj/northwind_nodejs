"use strict";
module.exports=function(sequelize, DataTypes)
{
	var OrderDetails=sequelize.define('OrderDetails',
	{
		orderId:
		{
			type:DataTypes.INTEGER,
			field:"order_id"
		},
		productId:
		{
			type:DataTypes.INTEGER,
			field:"product_id"
		},
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