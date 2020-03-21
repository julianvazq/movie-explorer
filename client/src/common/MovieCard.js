import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const MovieCard = ({ movie, toggleWatchlist }) => {
  const dispatch = useDispatch();

  const { id, watchlisted } = movie;

  return (
    <div
      style={{ color: watchlisted && 'red' }}
      onClick={() => dispatch(toggleWatchlist(movie))}
    >
      {movie.title}
    </div>
  );
};

export default MovieCard;
