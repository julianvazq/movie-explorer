const express = require('express');
require('dotenv').config();
const cors = require('cors');

const movies = require('./routes/movies');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(`${__dirname}/client/build`));

// Routes
app.use('/movies', movies);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
