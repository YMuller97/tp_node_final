const User = require("../models/user.model");

const userRepository = {
	getAllUsers: async () => {
		try {
				const users = await User.findAll();
				return users; 
		}
		catch(error) {
				console.error("Erreur lors de la récupération des utilisateurs : ", error);
				throw error;
		}
	},
	getUserByEmail: async (u_email) => {
		try {
			const user = await User.findOne( {
				where: {user_email: u_email}
			})
			return user;
		}
		catch (error) {
			console.error("Erreur lors de la récupération de l'utilisateur : ", error);
			throw error;
		}
	},
	addUser: async (user) => {
		try {
			const newUser = await User.create(user);
			return newUser;
		}
		catch (error) {
			console.error("Erreur lors de l'ajout d'un utilisateur :", error);
			throw error;
		}
	}
}

module.exports = userRepository;