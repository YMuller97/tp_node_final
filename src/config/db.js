const Sequelize = require("sequelize");

// -------------------- Initialisation de Sequelize --------------------
const db = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
	host: 'localhost',
	port: process.env.POSTGRES_PORT,
	dialect: "postgres"
});

// -------------------- Connexion à la base --------------------
db.authenticate()
.then(() => {
	console.log("Base postgres connectée.");
})
.catch(e => {
	console.error("Echec de la connexion : ", e);
});

// -------------------- Synchronisation des modèles --------------------
db.sync({force: false})
.then(() => {
	console.log('Synchronisation des modèles réussie.')
})
.catch(e => {
	console.error("Echec de la synchronisation : ", e)
})

module.exports = db;