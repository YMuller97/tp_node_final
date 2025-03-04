const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];

		const verifiedToken = jwt.verify(token, 'secret');

		req.auth = {user_email: verifiedToken.sub, user_id: verifiedToken.user_id}
		next();
	}
	catch (error) {
		// console.log("test log headers requete (error) : ",req.headers.authorization)
		// console.log("token (error): ", token)
		res.status(401).json({message: "Echec authentification : " + error})
	}
}

module.exports = auth;