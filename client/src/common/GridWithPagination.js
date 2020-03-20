import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  nowPlayingState,
  fetchNowPlayingMovies,
  toggleWatchlistNowPlaying
} from '../features/movies/slices/nowPlayingMoviesSlice';
import {
  popularMoviesState,
  fetchPopularMovies,
  toggleWatchlistPopular
} from '../features/movies/slices/popularMoviesSlice';
import MovieGrid from './MovieGrid';
import styled from 'styled-components';
import { determineFetch } from '../features/movies/slices/ReusableLogic';

const GridWithPagination = ({ type }) => {
  const dispatch = useDispatch();

  const [allMovies, setAllMovies] = useState([]);
  const [moviesVisible, setMoviesVisible] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(null);

  const {
    movies: nowPlayingMovies,
    pages: nowPlayingMoviesPages,
    status: nowPlayingMoviesStatus
  } = useSelector(nowPlayingState);

  const {
    movies: popularMovies,
    pages: popularMoviesPages,
    status: popularMoviesStatus
  } = useSelector(popularMoviesState);

  useEffect(() => {
    // Call designated fetch action
    let fetch = null;
    fetch = determineFetch(type);
    dispatch(fetch(currentPage));
  }, [currentPage]);

  const createGridComponent = () => {
    switch (type) {
      case 'NOW_PLAYING':
        return (
          <MovieGrid movies={nowPlayingMovies} status={nowPlayingMoviesStatus}>
            Now playing
          </MovieGrid>
        );
      case 'POPULAR':
        return (
          <MovieGrid movies={popularMovies} status={popularMoviesStatus}>
            Popular
          </MovieGrid>
        );
    }
  };

  return <>{createGridComponent()}</>;
};

export default GridWithPagination;
