const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const addWatchlistedProperty = movieObject => {
  // Check if array or single object
  if (movieObject.hasOwnProperty('results')) {
    const { results } = movieObject;
    const newResults = results.map(movie => ({
      watchlisted: false,
      ...movie
    }));
    return { ...movieObject, results: newResults };
    // return newMovieObject;
  } else {
    return { watchlisted: false, ...movieObject };
  }
};

//@route GET /movies/nowplaying/:[age]
//@desc Get NOW PLAYING Movies
router.get('/nowplaying/:page', async (req, res) => {
  try {
    // Destructure data from client
    const { page } = req.params;

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
    );
    const movies = await data.json();

    const changedMovies = addWatchlistedProperty(movies);
    res.send(changedMovies);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Request failed!' });
  }
});

//@route GET /movies/popular/:page
//@desc Get POPULAR Movies
router.get('/popular/:page', async (req, res) => {
  try {
    // Destructure data from client
    const { page } = req.params;

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
    );
    const movies = await data.json();

    const changedMovies = addWatchlistedProperty(movies);
    res.send(changedMovies);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Request failed!' });
  }
});

//@route GET /movies/upcoming/:page
//@desc Get UPCOMING Movies
router.get('/upcoming/:page', async (req, res) => {
  try {
    // Destructure data from client
    const { page } = req.params;

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
    );
    const movies = await data.json();

    const changedMovies = addWatchlistedProperty(movies);
    res.send(changedMovies);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Request failed!' });
  }
});

//@route GET /movies/:id/similar/:page
//@desc Get SIMILAR Movies
router.get('/:id/similar/:page', async (req, res) => {
  try {
    // Destructure data from client
    const { page, id } = req.params;

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
    );
    const movies = await data.json();

    const changedMovies = addWatchlistedProperty(movies);
    res.send(changedMovies);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Request failed!' });
  }
});

//@route GET /movies/random
//@desc Get RANDOM Movie
router.get('/random', async (req, res) => {
  try {
    let min = Math.ceil(1);
    let max = Math.floor(500);
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const dataMovies = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomNumber}`
    );
    const movies = await dataMovies.json();

    min = Math.ceil(1);
    max = Math.floor(19);
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const randomMovieID = movies.results[randomNumber].id;

    const dataRandomMovie = await fetch(
      `https://api.themoviedb.org/3/movie/${randomMovieID}?api_key=${process.env.API_KEY}`
    );
    const randomMovie = await dataRandomMovie.json();

    const changedMovie = addWatchlistedProperty(randomMovie);
    res.send(changedMovie);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Request failed!' });
  }
});

//@route GET /movies/query:word
//@desc Get Movies from WORD
router.get('/query/:word', async (req, res) => {
  try {
    // Destructure data from client
    const { word } = req.params;

    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${word}`
    );
    const movies = await data.json();

    const changedMovies = addWatchlistedProperty(movies);
    res.send(changedMovies);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Request failed!' });
  }
});

//@route GET /movies/:id
//@desc Get MOVIE DETAILS
router.get('/:id', async (req, res) => {
  try {
    // Destructure data from client
    const { id } = req.params;

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&append_to_response=videos,images`
    );
    const movie = await data.json();
    const changedMovie = addWatchlistedProperty(movie);
    res.send(changedMovie);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Request failed!' });
  }
});

//@route GET /movies/:id/reviews/:page
//@desc Get REVIEWS for Movie
router.get('/:id/reviews/:page', async (req, res) => {
  try {
    // Destructure data from client
    const { page, id } = req.params;

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.API_KEY}&language=en-US&page=${page}`
    );
    const movies = await data.json();

    res.send(movies);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Request failed!' });
  }
});

module.exports = router;
