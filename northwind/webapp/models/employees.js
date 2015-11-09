"use strict";
module.exports=function(sequelize, DataTypes)
{
	var Employees = sequelize.define('Employees',
	{
		
		firstName:
		{
			type:DataTypes.STRING,
			field:"first_name"
		},
		lastName:
		{
			type:DataTypes.STRING,
			field:"last_name"
		},
		title:
		{
			type:DataTypes.STRING,
			field:"title"
		},
		titleOfCourtesy:
		{
			type:DataTypes.STRING,
			field:"title_of_courtesy"
		},
		birthDate:
		{
			type:DataTypes.DATE,
			field:"birth_date"
		},
		hireDate: {
			type:DataTypes.DATE,
			field:"hire_date"
		},
		address:
		{
			type:DataTypes.STRING,
			field:"address"
		},
		city:
		{
			type:DataTypes.STRING,
			field:"city"
		},
		region:
		{
			type:DataTypes.STRING,
			field:"region"
		},
		postalCode:{
			type:DataTypes.STRING,
			field:"postal_code"
		},
		country:
		{
			type:DataTypes.STRING,
			field:"country"
		},
		homePhone:{
			type:DataTypes.STRING,
			field:"home_phone"
		},
		extension:{
			type:DataTypes.STRING,
			field:"extension"
		},
		notes:{
			type:DataTypes.STRING,
			field:"notes"
		}
	},
	{
		tableName:"tbl_employees",
		timestamps: false
	},
	{
    	classMethods: {
      		associate: function(models) {
        		Employees.hasMany(models.Territories, 
        		{
          			through: models.EmployeeTerritories,
          			foreignKey:'employee_id'
        		});
      	}
      }
    });
	return Employees;
}