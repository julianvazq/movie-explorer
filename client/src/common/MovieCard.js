import React, { useState, useEffect } from 'react';
import {
  nowPlayingState,
  fetchNowPlayingMovies,
  toggleWatchlistNowPlaying
} from '../features/movies/slices/nowPlayingMoviesSlice';
import { useSelector, useDispatch } from 'react-redux';

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const { id } = movie;

  //   console.log(movie);
  return (
    // <div onClick={() => dispatch(toggleWatchlistNowPlaying(movie))}>
    <div>{movie.title}</div>
  );
};

export default MovieCard;
