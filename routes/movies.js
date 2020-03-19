const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

//@route GET /movies/nowplaying
//@desc Get NOW PLAYING Movies
router.get('/nowplaying', async (req, res) => {
  try {
    // Destructure data from client
    //   const { } = req.body;

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`
    );
    const nowPlayingMovies = await data.json();

    res.send(nowPlayingMovies);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
