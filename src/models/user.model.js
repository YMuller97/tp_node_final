const {DataTypes} = require("sequelize");
const sequelize = require('../config/db');


const User = sequelize.define('User', {
	user_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	user_email : {
		type: DataTypes.STRING(30),
		allowNull: false,
		unique: true 
	},
	user_pwd : {
		type: DataTypes.STRING(255),
		allowNull: false
	}
},
{
	tableName: 'users',
	timestamps: true
});

module.exports = User;