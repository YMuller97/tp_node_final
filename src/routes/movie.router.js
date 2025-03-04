const express = require("express");
const movieController = require("../controllers/movie.controller");
const router = express.Router();

// -------------------- Middlewares --------------------
const auth = require("../middlewares/auth");
const upload = require("../middlewares/multer")

// -------------------- Routes libres --------------------
router.get("/", movieController.getAllMovies);

router.get("/:id", movieController.getMovieById);

// -------------------- Routes protégées --------------------
// Ajouter un film
router.post("/", auth, upload.single("movie_image"), movieController.addMovie);

// Modifier un film
router.put("/:id", auth, upload.single("movie_image"), movieController.updateMovie);

// Supprimer un film
router.delete("/:id", auth, movieController.deleteMovie)

module.exports = router