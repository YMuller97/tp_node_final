const express = require('express'); 
const userRoutes = require("./routes/user.router");
const movieRoutes = require("./routes/movie.router")

const app = express();
app.use(express.json());

// -------------------- Routes --------------------
app.use("/auth", userRoutes);

app.use("/movies", movieRoutes);


// -------------------- Démarrage du serveur --------------------
const PORT = 3001; 
app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`); });