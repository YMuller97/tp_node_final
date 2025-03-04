const {DataTypes} = require("sequelize");
const sequelize = require('../config/db');

const Movie = sequelize.define('Movie', {
	movie_id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
		},
	movie_title : {
		type: DataTypes.STRING(100),
		allowNull: false
	},
	movie_description : {
		type: DataTypes.TEXT
	},
	movie_release_date : {
		type: DataTypes.DATEONLY,
		allowNull: false
	},
	movie_image : {
		type: DataTypes.STRING
	}
},
{
	tableName: 'movies',
	timestamps: true
});

module.exports = Movie;