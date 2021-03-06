"use strict";
module.exports=function(sequelize, DataTypes)
{
	var Orders = sequelize.define('Orders',
	{
		customerId:
		{
			type:DataTypes.INTEGER,
			field:"customer_id"
		},
		employeeId:
		{
			type:DataTypes.INTEGER,
			field:"employee_id"
		},
		shipVia:
		{
			type:DataTypes.INTEGER,
			field:"ship_via"
		},
		orderDate:
		{
			type:DataTypes.DATE,
			field:"order_date"
		},
		requiredDate:
		{
			type:DataTypes.DATE,
			field:"required_date"
		},
		shippedDate:
		{
			type:DataTypes.DATE,
			field:"shipped_date"
		},
		freight:
		{
			type:DataTypes.DOUBLE,
			field:"freight"
		},
		shipName:
		{
			type:DataTypes.STRING,
			field:"ship_name"
		},
		shipAddress:
		{
			type:DataTypes.STRING,
			field:"ship_address"
		},
		shipCity:
		{
			type:DataTypes.STRING,
			field:"ship_city"
		},
		shipRegion:
		{
			type:DataTypes.STRING,
			field:"ship_region"
		},
		shipPostalCode:
		{
			type:DataTypes.STRING,
			field:"ship_postal_code"
		},
		shipCountry:
		{
			type:DataTypes.STRING,
			field:"ship_country"
		}
	},
	{
		tableName:"tbl_orders",
		timestamps: false,
		classMethods:
		{
			associate:function(models)
			{
				Orders.belongsTo(models.Employees,{foreignKey:"employee_id"});
				Orders.belongsTo(models.Customers,{foreignKey:"customer_id"});
				Orders.belongsTo(models.Shippers,{foreignKey:"ship_via"});
				Orders.hasMany(models.OrderDetails,{foreignKey:"order_id"});
			}
		}
	});
	return Orders;
}