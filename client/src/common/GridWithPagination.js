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

const GridWithPagination = ({ type }) => {
  const dispatch = useDispatch();
  const [width] = useWindowSize();
  const [gridItems, setGridItems] = useState(getInitialGridItems());
  const [nowPlayingCurrentPage, setNowPlayingCurrentPage] = useState(1);
  const [popularCurrentPage, setPopularCurrentPage] = useState(1);

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

  const fetchNextPage = () => {
    let fetch = null;
    switch (type) {
      case 'NOW_PLAYING':
        setNowPlayingCurrentPage(prevState => prevState + 1);
        fetch = determineFetch(type);
        dispatch(fetch(nowPlayingCurrentPage + 1));
        break;
      case 'POPULAR':
        setPopularCurrentPage(prevState => prevState + 1);
        fetch = determineFetch(type);
        dispatch(fetch(popularCurrentPage + 1));
        break;
      default:
    }
  };

  // Dispatch action to fetch movies
  useEffect(() => {
    // Call designated fetch action
    const fetch = determineFetch(type);
    dispatch(fetch(1));
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

  const createGridComponent = () => {
    switch (type) {
      case 'NOW_PLAYING':
        return (
          <MovieGrid
            movies={nowPlayingMovies}
            status={nowPlayingMoviesStatus}
            toggleWatchlist={toggleWatchlistNowPlaying}
            fetchNextPage={fetchNextPage}
            gridItems={gridItems}
            currentPage={nowPlayingCurrentPage}
            maxPages={nowPlayingMoviesPages}
          />
        );
      case 'POPULAR':
        return (
          <MovieGrid
            movies={popularMovies}
            status={popularMoviesStatus}
            toggleWatchlist={toggleWatchlistPopular}
            fetchNextPage={fetchNextPage}
            gridItems={gridItems}
            currentPage={popularCurrentPage}
            maxPages={popularMoviesPages}
          />
        );
    }
  };

  return <>{createGridComponent()}</>;
};

export default GridWithPagination;
