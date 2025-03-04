const Movie = require("../models/movie.model");

const movieRepository = {
	getAllMovies: async () => {
		try {
			// console.log("movieRepository : getAllMovies")
			const movies = await Movie.findAll();
			// console.log("movieRepository : resultat getAllMovies : ", movies)
			return movies; 
		}
		catch(error) {
			console.error("Erreur lors de la récupération des films : ", error);
			throw error;
		}
	},
	getMovieById: async (m_id) => {
		try {
			const movie = await Movie.findByPk(m_id)
			return movie;
		}
		catch (error) {
			console.error("Erreur lors de la récupération du film : ", error);
			throw error;
		}
	},
	addMovie: async (movie) => {
		try {
			const newMovie = await Movie.create(movie);
			return newMovie;
		}
		catch (error) {
			console.error("Erreur lors de l'ajout d'un utilisateur :", error);
			throw error;
		}
	},
	updateMovie: async (data, m_id) => {
		try {
			await Movie.update(data, {where: {movie_id: m_id}});
			console.log("Le film ", m_id, " a été modifié avec succès")
		}
		catch (error) {
			console.error("Erreur lors de la modification d'un film : ", error);
			throw error;
		}
	},
	deleteMovie: async (m_id) => {
		try {
			await Movie.destroy({where: {movie_id: m_id}})
		}
		catch (error) {
			console.error("Erreur lors de la suppression d'un film : ", error);
			throw error;
		}
	}
}

module.exports = movieRepository;