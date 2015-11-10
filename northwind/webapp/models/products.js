"use strict";
module.exports=function(sequelize, DataTypes)
{
	var Products=sequelize.define('Products',
	{
		supplierId:
		{
			type:DataTypes.INTEGER,
			field:"supplier_id"
		},
		categoryId:
		{
			type:DataTypes.INTEGER,
			field:"category_id"
		},
		productName:
		{
			type:DataTypes.STRING,
			field:"product_name"
		},
		quantityPerUnit:
		{
			type:DataTypes.STRING,
			field:"quantity_per_unit"
		},
		unitPrice:
		{
			type:DataTypes.DOUBLE,
			field:"unit_price"
		},
		unitInStock:
		{
			type:DataTypes.INTEGER,
			field:"unit_in_stock"
		},
		unitOnOrder:
		{
			type:DataTypes.INTEGER,
			field:"unit_on_order"
		},
		recorderLevel:
		{
			type:DataTypes.INTEGER,
			field:"recorder_level"
		},
		discontinued:
		{
			type:DataTypes.INTEGER,
			field:"discontinued"
		}
	},
	{
		tableName:"tbl_products",
		timestamps: false,
		classMethods:
		{
			associate:function(models)
			{
				Products.belongsTo(models.Categories,{foreignKey:"category_id"});
				Products.belongsTo(models.Suppliers,{foreignKey:"supplier_id"});
			}
		}
	});
	return Products;
}