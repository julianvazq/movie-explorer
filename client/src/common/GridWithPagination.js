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
import styled from 'styled-components';
import { determineFetch } from '../features/movies/slices/ReusableLogic';
import useWindowSize from '../hooks/useWindowSize';

const GridWithPagination = ({ type }) => {
  const dispatch = useDispatch();
  const [width] = useWindowSize();

  const [allMovies, setAllMovies] = useState([]);
  const [moviesVisible, setMoviesVisible] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(null);
  const [gridItems, setGridItems] = useState(3);

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

  useLayoutEffect(() => {
    if (width < 375) {
      setGridItems(2);
    } else if (width >= 375 && width < 700) {
      setGridItems(3);
    } else if (width >= 700 && width < 900) {
      setGridItems(4);
    } else {
      setGridItems(5);
    }
  }, [width]);

  //   console.log(gridItems);
  const createGridComponent = () => {
    switch (type) {
      case 'NOW_PLAYING':
        return (
          <MovieGrid
            movies={nowPlayingMovies}
            status={nowPlayingMoviesStatus}
            toggleWatchlist={toggleWatchlistNowPlaying}
            gridItems={gridItems}
          >
            Now playing
          </MovieGrid>
        );
      case 'POPULAR':
        return (
          <MovieGrid
            movies={popularMovies}
            status={popularMoviesStatus}
            toggleWatchlist={toggleWatchlistPopular}
            gridItems={gridItems}
          >
            Popular
          </MovieGrid>
        );
    }
  };

  return <>{createGridComponent()}</>;
};

export default GridWithPagination;
