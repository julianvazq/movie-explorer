import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Pagination from './Pagination';
import MovieCard from './MovieCard';
import { Grid } from '../styles/styled-components';

const MovieGrid = ({
  movies,
  status,
  maxPages,
  currentPage,
  toggleWatchlist,
  fetchNextPage,
  gridItems
}) => {
  const [firstMovieVisible, setFirstMovieVisible] = useState(0);
  const [lastMovieVisible, setLastMovieVisible] = useState(gridItems);

  const MAX_MOVIES_PER_PAGE = 20;

  const showPreviousMovies = () => {
    if (firstMovieVisible >= gridItems) {
      setFirstMovieVisible(prevState => prevState - gridItems);
      setLastMovieVisible(prevState => prevState - gridItems);
    } else {
      setFirstMovieVisible(0);
      setLastMovieVisible(gridItems);
    }
  };

  const showNextMovies = async () => {
    if (
      lastMovieVisible + gridItems > movies.length &&
      currentPage < maxPages
    ) {
      await fetchNextPage();
    }

    setFirstMovieVisible(prevState => prevState + gridItems);
    setLastMovieVisible(prevState => prevState + gridItems);
  };
  useEffect(() => {
    const moviesShowing = Math.abs(lastMovieVisible - firstMovieVisible);
    const moviesToFill = gridItems - moviesShowing;
    if (lastMovieVisible + moviesToFill < movies.length) {
      setLastMovieVisible(prevState => prevState + moviesToFill);
    }
  }, [gridItems]);

  if (status === 'failure') {
    return <p>Oh no, something went wrong!</p>;
  }

  if (status === 'idle' || status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Pagination
        firstMovieVisible={firstMovieVisible}
        lastMovieVisible={lastMovieVisible}
        showPreviousMovies={showPreviousMovies}
        showNextMovies={showNextMovies}
      />
      <Grid>
        {movies.slice(firstMovieVisible, lastMovieVisible).map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            toggleWatchlist={toggleWatchlist}
          />
        ))}
      </Grid>
    </>
  );
};

export default MovieGrid;
