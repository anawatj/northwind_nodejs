module.exports=function(sequelize, DataTypes)
{
	var EmployeeTerritories=sequelize.define('EmployeeTerritories',
	{
		employeeId:
		{
			type:DataTypes.INTEGER,
			field:"employee_id",
			primaryKey: true,
      		autoIncrement: false
		},
		territoriesId:
		{
			type:DataTypes.INTEGER,
			field:"territory_id",
			primaryKey: true,
      		autoIncrement: false
		}
	},
	{
		tableName:"tbl_employees_territories",
		timestamps: false
	});
	return EmployeeTerritories;
}