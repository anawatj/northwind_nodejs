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
		tableName:"tbl_order_details",
		timestamps: false,
		classMethods:
		{
			associate:function(models)
			{
				OrderDetails.belongsTo(models.Products,{foreignKey:"product_id"});
			}
		}
	});
	return OrderDetails;
}