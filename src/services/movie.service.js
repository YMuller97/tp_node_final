const movieRepository = require("../repositories/movie.repository")

const movieService = {
  getAllMovies: async () => {
    try {
      const movies = await movieRepository.getAllMovies();
			// console.log("MovieService : getAllMovies : ", movies)
      return movies;
    } 
			catch (error) {
      console.error("Erreur dans le service films : ", error);
      throw error;
    }
  },
	getMovieById: async (m_id) => {
		try {
			const movie = await movieRepository.getMovieById(m_id);
			return movie;
		}
		catch (error) {
			console.error("Erreur dans le service films : ", error)
			throw error;
		}
	},
  addMovie: async (movie) => {
    try {
			console.log("Insert request content : ", movie)
      await movieRepository.addMovie(movie);
			console.log("MovieService : Ajout du film réussi !")
    } 
		catch (error) {
      console.error("Erreur dans le service films : ", error);
      throw error;
    }
  },
	updateMovie: async (data, m_id) => {
		try {
			await movieRepository.updateMovie(data, m_id);
		}
		catch (error) {
			console.error("Erreur dans le service films : ", error);
			throw error;
		}
	},
	deleteMovie: async (m_id) => {
		try {
			await movieRepository.deleteMovie(m_id)
		}
		catch (error) {
			console.error("Erreur dans le service films : ", error);
			throw error;
		}
	}
};

module.exports = movieService;