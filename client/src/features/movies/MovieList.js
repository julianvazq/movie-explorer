import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moviesNowPlayingState, fetchMovies } from './moviesNowPlayingSlice';

const MovieList = () => {
  const { movies, loading } = useSelector(moviesNowPlayingState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  console.log(movies);
  return (
    <div>
      {movies.map(movie => (
        <div>{movie.title}</div>
      ))}
    </div>
  );
};

export default MovieList;
