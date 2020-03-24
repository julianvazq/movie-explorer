const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const movies = require('./routes/movies');

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/movies', movies);

/*** Uncomment before redeployment ***/
app.use(express.static(`${__dirname}/client/build`));

/*** Uncomment before redeployment ***/
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
