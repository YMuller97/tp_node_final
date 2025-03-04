const userService = require("../services/user.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userController = {
    //Retourne tous les utilisateurs
    getAllUsers: async (req, res) => {
			try {
				const users = await userService.getAllUsers();
				res.status(200).json(users);
			} catch (error) {
				console.error("Erreur dans le controleur utilisateur : ", error);
				res.status(400).json({message: "Erreur lors de la récupération des utilisateurs."});
			}
    },
    // Ajoute un utilisateur
    addUser: async (req, res) => {
			try {
				const {user_email, input_pwd} = req.body;

				//Hashage du mot de passe 
				const user_pwd = await bcrypt.hash(input_pwd, 10);

				//On envoie l'email et le mdp hashé au service
				await userService.addUser({user_email, user_pwd});

				res.status(201).json({ message: "Utilisateur ajouté avec succès!"});
			} catch (error) {
				console.error("Erreur dans le controleur utilisateur : ", error);
				res.status(400).json({message: error.message});
			}
    },
    // Connecte un utilisateur si l'email et le mot de passe correspondent
    signIn: async (req, res) => {
			try {
				const {user_email, input_pwd} = req.body;
				const user = await userService.getUserByEmail(user_email);
				// console.log("User controller : signIn : getUserByEmail renvoie : ", user);
				const pwd_check = await bcrypt.compare(input_pwd, user.user_pwd);
				if(!pwd_check) {
						return res.status(401).json({message: "Non autorisé"});
				}
				const token = jwt.sign({sub: user_email, user_id: user.user_id}, "secret", { expiresIn: "1h" });
				res.status(200).json({token});
			} 
			catch (error) {
				console.error("Erreur dans le controleur utilisateur : ", error);
				res.status(401).json({message: "Authentification échouée : " + error.message });
			}
    },
};

module.exports = userController;