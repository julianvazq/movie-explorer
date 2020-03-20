import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3;
`;

const MovieGrid = ({ movies, status }) => {
  console.log(movies);

  if (status === 'idle' || status === 'loading') {
    return <p>Loading...</p>;
  }
  return (
    <Grid>
      {movies.map(movie => (
        <p>{movie.title}</p>
      ))}
    </Grid>
  );
};

export default MovieGrid;
