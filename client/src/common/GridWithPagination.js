import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLocalStorage } from '../features/movies/slices/watchlistSlice';
import {
  nowPlayingState,
  toggleWatchlistNowPlaying
} from '../features/movies/slices/nowPlayingMoviesSlice';
import {
  topRatedMoviesState,
  toggleWatchlistTopRated
} from '../features/movies/slices/topRatedMoviesSlice';
import {
  upcomingMoviesState,
  toggleWatchlistUpcoming
} from '../features/movies/slices/upcomingMoviesSlice';
import {
  popularMoviesState,
  toggleWatchlistPopular
} from '../features/movies/slices/popularMoviesSlice';
import MovieGrid from './MovieGrid';
import { determineFetch } from '../features/movies/slices/GetReducers';
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
  const [currentPage, setCurrentPage] = useState(1);

  const {
    movies: nowPlayingMovies,
    pages: nowPlayingMoviesPages,
    status: nowPlayingMoviesStatus
  } = useSelector(nowPlayingState);

  const {
    movies: upcomingMovies,
    pages: upcomingMoviesPages,
    status: upcomingMoviesStatus
  } = useSelector(upcomingMoviesState);

  const {
    movies: topRatedMovies,
    pages: topRatedMoviesPages,
    status: topRatedMoviesStatus
  } = useSelector(topRatedMoviesState);

  const {
    movies: popularMovies,
    pages: popularMoviesPages,
    status: popularMoviesStatus
  } = useSelector(popularMoviesState);

  // Closure retains currentPage for each individual movie grid
  const fetchNextPage = () => {
    const fetch = determineFetch(type);
    const next = () => {
      setCurrentPage(currentPage + 1);
      dispatch(fetch(currentPage + 1));
    };

    return next;
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

  const createGridComponent = () => {
    switch (type) {
      case 'NOW_PLAYING':
        return (
          <MovieGrid
            movies={nowPlayingMovies}
            status={nowPlayingMoviesStatus}
            toggleWatchlist={toggleWatchlistNowPlaying}
            fetchNextPage={fetchNextPage()}
            gridItems={gridItems}
            currentPage={currentPage}
            maxPages={nowPlayingMoviesPages}
          />
        );
      case 'TOP_RATED':
        return (
          <MovieGrid
            movies={topRatedMovies}
            status={topRatedMoviesStatus}
            toggleWatchlist={toggleWatchlistTopRated}
            fetchNextPage={fetchNextPage()}
            gridItems={gridItems}
            currentPage={currentPage}
            maxPages={topRatedMoviesPages}
          />
        );
      case 'UPCOMING':
        return (
          <MovieGrid
            movies={upcomingMovies}
            status={upcomingMoviesStatus}
            toggleWatchlist={toggleWatchlistUpcoming}
            fetchNextPage={fetchNextPage()}
            gridItems={gridItems}
            currentPage={currentPage}
            maxPages={upcomingMoviesPages}
          />
        );
      case 'POPULAR':
        return (
          <MovieGrid
            movies={popularMovies}
            status={popularMoviesStatus}
            toggleWatchlist={toggleWatchlistPopular}
            fetchNextPage={fetchNextPage()}
            gridItems={gridItems}
            currentPage={currentPage}
            maxPages={popularMoviesPages}
          />
        );
    }
  };

  return <>{createGridComponent()}</>;
};

export default GridWithPagination;
