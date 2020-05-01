import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import MovieCard from './MovieCard';
import { Grid } from '../styles/styled-components';
import Alert from './Alert';

const MovieGrid = ({
  movies,
  status,
  maxPages,
  currentPage,
  toggleWatchlist,
  fetchNextPage,
  gridItems,
}) => {
  const [firstMovieVisible, setFirstMovieVisible] = useState(0);
  const [lastMovieVisible, setLastMovieVisible] = useState(gridItems);

  const showPreviousMovies = () => {
    if (firstMovieVisible >= gridItems) {
      setFirstMovieVisible((prevState) => prevState - gridItems);
      setLastMovieVisible((prevState) => prevState - gridItems);
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

    setFirstMovieVisible((prevState) => prevState + gridItems);
    setLastMovieVisible((prevState) => prevState + gridItems);
  };
  useEffect(() => {
    const moviesShowing = Math.abs(lastMovieVisible - firstMovieVisible);
    const moviesToFill = gridItems - moviesShowing;
    if (lastMovieVisible + moviesToFill < movies.length) {
      setLastMovieVisible((prevState) => prevState + moviesToFill);
    }
  }, [gridItems]);

  if (status === 'failure') {
    return (
      <Alert message='Oh no, something went wrong! Could not load movies.' />
    );
  }

  if (status === 'idle' || status === 'loading') {
    return (
      <Alert>
        <p
          style={{
            textAlign: 'left',
            marginTop: '1.5rem',
          }}
        >
          Loading...
        </p>
      </Alert>
    );
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
        {movies.slice(firstMovieVisible, lastMovieVisible).map((movie) => (
          <MovieCard
            key={movie.id}
            status={status}
            movie={movie}
            toggleWatchlist={toggleWatchlist}
            gridItems={gridItems}
          />
        ))}
      </Grid>
    </>
  );
};

export default MovieGrid;
