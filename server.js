const express = require('express');
require('dotenv').config();
const cors = require('cors');

const movies = require('./routes/movies');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/movies', movies);

const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
