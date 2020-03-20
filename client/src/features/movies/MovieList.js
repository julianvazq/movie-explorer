import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  nowPlayingMoviesState,
  fetchMovies,
  toggleWatchlist
} from './slices/nowPlayingMoviesSlice';
import { watchlistState } from './slices/watchlistSlice';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const CustomButton = styled(Button)`
  color: pink;
  background: red;
  border: none;
`;

const MovieList = () => {
  const { moviesNowPlaying, pages, status } = useSelector(
    nowPlayingMoviesState
  );
  const { watchlist } = useSelector(watchlistState);

  console.log(watchlist);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(1));
  }, []);

  if (status === 'failure') {
    return <div>Oh no, something went wrong...</div>;
  }

  if (status === 'idle' || status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'success') {
    return (
      <div>
        <CustomButton color='primary'>primary</CustomButton>
        {moviesNowPlaying.map(movie => (
          <div
            style={{ margin: '1rem' }}
            onClick={() => {
              dispatch(toggleWatchlist(movie));
              //   dispatch(handleWatchlist(movie));
            }}
          >
            {movie.title}
            {''}
            Watchlisted: {movie.watchlisted ? 'YES' : 'NO'}
          </div>
        ))}
        <h2>Watchlist</h2>
        <div>
          {watchlist.map(movie => (
            <p>{movie.title}</p>
          ))}
        </div>
      </div>
    );
  }
};

export default MovieList;
