import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLocalStorage } from '../features/movies/slices/watchlistSlice';
import MovieGrid from './MovieGrid';
import {
  determineFetch,
  determineToggleWatchlist
} from '../features/movies/slices/GetReducers';
import useWindowSize from '../hooks/useWindowSize';

const getInitialGridItems = () => {
  if (window.innerWidth >= 1200) {
    return 6;
  } else if (window.innerWidth >= 900) {
    return 5;
  } else if (window.innerWidth >= 700) {
    return 4;
  } else if (window.innerWidth >= 375) {
    return 3;
  } else {
    return 2;
  }
};

const GridWithPagination = ({ type, selector }) => {
  const dispatch = useDispatch();
  const [width] = useWindowSize();
  const [gridItems, setGridItems] = useState(getInitialGridItems());
  const [currentPage, setCurrentPage] = useState(1);

  // Conditionally selects movie slice from Redux store
  const { movies, pages, status } = useSelector(state => state[selector]);
  const toggleWatchlist = determineToggleWatchlist(type);

  // Closure retains currentPage for each individual movie grid
  const fetchNextPage = () => {
    const fetch = determineFetch(type);
    setCurrentPage(currentPage + 1);
    dispatch(fetch(currentPage + 1));
  };

  // Dispatch action to fetch movies
  useEffect(() => {
    // Call designated fetch action and fetch Page 1
    const fetch = determineFetch(type);
    dispatch(fetch(1));

    // Initialize LocalStorage
    dispatch(fetchLocalStorage());
  }, []);

  useLayoutEffect(() => {
    if (width >= 1200) {
      setGridItems(6);
    } else if (width >= 900) {
      setGridItems(5);
    } else if (width >= 700) {
      setGridItems(4);
    } else if (width >= 375) {
      setGridItems(3);
    } else {
      setGridItems(2);
    }
  }, [width]);

  return (
    <MovieGrid
      movies={movies}
      status={status}
      toggleWatchlist={toggleWatchlist}
      fetchNextPage={fetchNextPage}
      gridItems={gridItems}
      currentPage={currentPage}
      maxPages={pages}
    />
  );
};

export default GridWithPagination;
