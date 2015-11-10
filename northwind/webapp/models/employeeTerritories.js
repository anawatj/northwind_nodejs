module.exports=function(sequelize, DataTypes)
{
	var EmployeeTerritories=sequelize.define('EmployeeTerritories',
	{
		employeeId:
		{
			type:DataTypes.INTEGER,
			field:"id",
			primaryKey: true,
      		autoIncrement: true
		}
	},
	{
		tableName:"tbl_employees_territories",
		timestamps: false
	});
	return EmployeeTerritories;
}