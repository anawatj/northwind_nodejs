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
	});
	return EmployeeTerritories;
}