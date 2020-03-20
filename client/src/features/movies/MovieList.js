import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  nowPlayingState,
  fetchNowPlayingMovies,
  toggleWatchlistNowPlaying
} from './slices/nowPlayingMoviesSlice';
import {
  popularMoviesState,
  fetchPopularMovies,
  toggleWatchlistPopular
} from './slices/popularMoviesSlice';
import { watchlistState, remove } from './slices/watchlistSlice';
import { Button } from 'reactstrap';
import styled from 'styled-components';

const CustomButton = styled(Button)`
  color: pink;
  background: red;
  border: none;
`;

const MovieList = () => {
  const { nowPlayingMovies, pages, status } = useSelector(nowPlayingState);
  const { popularMovies } = useSelector(popularMoviesState);
  const { watchlist } = useSelector(watchlistState);

  console.log(popularMovies);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlayingMovies(1));
    dispatch(fetchPopularMovies(1));
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
        <h2>Watchlist</h2>
        <div>
          {watchlist.map(movie => (
            <p onClick={() => dispatch(remove(movie))}>{movie.title}</p>
          ))}
        </div>
        <CustomButton color='primary'>primary</CustomButton>
        {nowPlayingMovies.map(movie => (
          <div
            style={{ margin: '1rem' }}
            onClick={() => {
              dispatch(toggleWatchlistNowPlaying(movie));
            }}
          >
            {movie.title}
            {''}
            Watchlisted: {movie.watchlisted ? 'YES' : 'NO'}
          </div>
        ))}
        <h2>Popular</h2>
        {popularMovies.map(movie => (
          <div
            style={{ margin: '1rem' }}
            onClick={() => {
              dispatch(toggleWatchlistPopular(movie));
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
