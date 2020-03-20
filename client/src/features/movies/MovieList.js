import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  moviesNowPlayingState,
  fetchMovies,
  toggleWatchlist
} from './moviesNowPlayingSlice';
import { handleWatchlist, watchlistState } from './watchlistSlice';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const CustomButton = styled(Button)`
  color: pink;
  background: red;
  border: none;
`;

const MovieList = () => {
  const { moviesNowPlaying, pages, status } = useSelector(
    moviesNowPlayingState
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
      </div>
    );
  }
};

export default MovieList;
