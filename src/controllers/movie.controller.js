const { getAllMovies, addMovie } = require("../repositories/movie.repository");
const movieService = require("../services/movie.service");

const movieController = {
	// Recupère tous les films
	getAllMovies: async (req, res) => {
		try {
			const movies = await movieService.getAllMovies();
			res.status(200).json(movies);
		}
		catch (error) {
			console.error("Erreur dans le controleur films : ", error);
			res.status(400).json({message: "Erreur lors de la récupération des films."});
		}
	},
	// Récupère un film en fonction de l'id fourni
	getMovieById: async (req, res) => {
		try {
			const movie_id = req.params.id;
			const movie = await movieService.getMovieById(movie_id);
			res.status(200).json(movie);
		}
		catch (error) {
			console.error("Erreur dans le controleur films : ", error);
			res.status(400).json({message: "Erreur lors de la récupération d'un film."});
		}
	},
	// Ajoute un nouveau film
	addMovie: async (req, res) => {
		try {
			//Prend les données du body de la requête, plus le chemin vers le répertoire d'enregistrement
			// de l'image fournie
			const movie = {
                ...req.body, 
                movie_image: req.file ? `/uploads/${req.file.filename}` : null 
            };
			await movieService.addMovie(movie);
			res.status(200).json({message: "MovieController : Film ajouté avec succès !"});
		}
		catch (error) {
			console.error("Erreur dans le controleur films : ", error);
			res.status(400).json({message: "Erreur lors de l'ajout d'un film."});
		}
	},
	updateMovie: async (req, res) => {
		try {
			const data = {
                ...req.body, 
                movie_image: req.file ? `/uploads/${req.file.filename}` : null 
            };
			const movie_id = req.params.id;
			await movieService.updateMovie(data, movie_id);
			res.status(200).json({message: "Film modifié avec succès"})
		}
		catch (error) {
			console.error("Erreur dans le controleur films : ", error);
			res.status(400).json({message: "Erreur lors de la modification d'un film."});
		}
	},
	deleteMovie: async (req, res) => {
		try {
			const movie_id = req.params.id;
			await movieService.deleteMovie(movie_id);
			res.status(200).json({message: "Film supprimé avec succès"})
		}
		catch (error) {
			console.error("Erreur dans le controleur films : ", error);
			res.status(400).json({message: "Erreur lors de la suppression d'un film."});
		}
	}
}

module.exports = movieController;