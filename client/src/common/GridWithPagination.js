import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  nowPlayingState,
  toggleWatchlistNowPlaying
} from '../features/movies/slices/nowPlayingMoviesSlice';
import {
  popularMoviesState,
  toggleWatchlistPopular
} from '../features/movies/slices/popularMoviesSlice';
import MovieGrid from './MovieGrid';
import { determineFetch } from '../features/movies/slices/ReusableLogic';
import useWindowSize from '../hooks/useWindowSize';

const GridWithPagination = ({ type }) => {
  const dispatch = useDispatch();
  const [width] = useWindowSize();
  const [currentPage, setCurrentPage] = useState(1);
  const [gridItems, setGridItems] = useState(3);

  const incrementCurrentPage = () => {
    setCurrentPage(prevState => prevState + 1);
  };

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

  // Dispatch action to fetch movies
  useEffect(() => {
    // Call designated fetch action
    let fetch = null;
    fetch = determineFetch(type);
    dispatch(fetch(currentPage));
  }, [currentPage]);

  useLayoutEffect(() => {
    if (width > 1200) {
      setGridItems(6);
    } else if (width > 900) {
      setGridItems(5);
    } else if (width > 700) {
      setGridItems(4);
    } else if (width > 375) {
      setGridItems(3);
    } else {
      setGridItems(2);
    }
  }, [width]);

  const createGridComponent = () => {
    switch (type) {
      case 'NOW_PLAYING':
        return (
          <MovieGrid
            movies={nowPlayingMovies}
            status={nowPlayingMoviesStatus}
            toggleWatchlist={toggleWatchlistNowPlaying}
            gridItems={gridItems}
          />
        );
      case 'POPULAR':
        return (
          <MovieGrid
            movies={popularMovies}
            status={popularMoviesStatus}
            toggleWatchlist={toggleWatchlistPopular}
            gridItems={gridItems}
          />
        );
    }
  };

  return <>{createGridComponent()}</>;
};

export default GridWithPagination;
