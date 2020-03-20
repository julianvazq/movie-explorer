import React from 'react';
import MovieCard from './MovieCard';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.25rem;
`;

const MovieGrid = ({ movies, status }) => {
  console.log(movies);

  if (status === 'failure') {
    return <p>Oh no, something went wrong!</p>;
  }

  if (status === 'idle' || status === 'loading') {
    return <p>Loading...</p>;
  }

  return (
    <Grid>
      {movies.map(movie => (
        <MovieCard movie={movie} />
      ))}
    </Grid>
  );
};

export default MovieGrid;
