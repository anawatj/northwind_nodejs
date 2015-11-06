"use strict";
module.exports=function(sequelize, DataTypes)
{
	var Employeees = sequelize.define('Employees',
	{
		id:
		{
			type:DataTypes.INTEGER,
			name:"id"
		},
		firstName:
		{
			type:DataTypes.STRING,
			name:"first_name"
		},
		lastName:
		{
			type:DataTypes.STRING,
			name:"last_name"
		},
		title:
		{
			type:DataTypes.STRING,
			name:"title"
		},
		titleOfCourtesy:
		{
			type:DataTypes.STRING,
			name:"title_of_courtesy"
		},
		birthDate:
		{
			type:DataTypes.DATE,
			name:"birth_date"
		},
		hireDate: {
			type:DataTypes.DATE,
			name:"hire_date"
		},
		address:
		{
			type:DataTypes.STRING,
			name:"address"
		},
		city:
		{
			type:DataTypes.STRING,
			name:"city"
		},
		region:
		{
			type:DataTypes.STRING,
			name:"region"
		},
		postalCode:{
			type:DataTypes.STRING,
			name:"postal_code"
		},
		country:
		{
			type:DataTypes.STRING,
			name:"country"
		},
		homePhone:{
			type:DataTypes.STRING,
			name:"home_phone"
		},
		extension:{
			type:DataTypes.STRING,
			name:"extension"
		},
		notes:{
			type:DataTypes.STRING,
			name:"notes"
		}
	},
	{
    	classMethods: {
      		associate: function(models) {
        		Employees.belongToMany(models.Territories, {
          		through: 'tbl_employees_territories'
        	});
      	}
    },
	{
		tableName:"tbl_employees"
	});
}