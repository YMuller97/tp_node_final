const userRepository = require("../repositories/user.repository")

const userService = {
  getAllUsers: async () => {
    try {
      const users = await userRepository.getAllUsers();
      return users;
    } 
		catch (error) {
      console.error("Erreur dans le service utilisateur : ", error);
      throw error;
    }
  },
	getUserByEmail: async (u_email) => {
		try {
			const user = await userRepository.getUserByEmail(u_email);
      console.log("User service : getUserByEmail : ", user);
			return user;
		}
		catch (error) {
			console.error("Erreur dans le service utilisateur : ", error)
			throw error;
		}
	},
  addUser: async (user) => {
    try {
      await userRepository.addUser(user);
    } catch (error) {
      console.error("Erreur dans le service utilisateur : ", error);
      throw error;
    }
  }
};

module.exports = userService