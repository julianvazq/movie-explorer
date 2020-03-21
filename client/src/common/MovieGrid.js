import React from 'react';
import MovieCard from './MovieCard';
import styled from 'styled-components';

const MovieGrid = ({ movies, status, toggleWatchlist, gridItems }) => {
  const Grid = styled.div`
    display: grid;
    grid-gap: 0.25rem;
    grid-template-columns: ${props => {
      if (gridItems === 2) {
        return 'repeat(2, 1fr);';
      } else if (gridItems === 3) {
        return 'repeat(3, 1fr);';
      } else if (gridItems === 4) {
        return 'repeat(4, 1fr);';
      } else {
        return 'repeat(5, 1fr);';
      }
    }};
  `;

  if (status === 'failure') {
    return <p>Oh no, something went wrong!</p>;
  }

  if (status === 'idle' || status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <Grid>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          toggleWatchlist={toggleWatchlist}
        />
      ))}
    </Grid>
  );
};

export default MovieGrid;
