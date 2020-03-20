import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const MovieGrid = ({ type }) => {
  //   const { movies, loading } = useSelector(moviesNowPlayingState);
  //   const { movies, loading } = useSelector(moviesPopular);

  const dispatch = useDispatch();

  useEffect(() => {
    switch (type) {
      case 'NOW_PLAYING':
        //   dispatch(fetchNowPlaying());
        break;
      case 'POPULAR':
        break;

      case 'TOP RATED':
        break;
    }
  }, []);

  return (
    <div>
      <Pagination />
      {movies.map(movie => {
        <MovieCard />;
      })}
    </div>
  );
};

export default MovieGrid;
