import React from 'react';
import {
  SimilarMoviesContainer,
  SimilarMoviesGrid,
  SimilarMoviesHeading
} from '../styles/styled-components';
import SimilarMovie from './SimilarMovie';

const SimilarMoviesSection = ({ similarMovies, gridItems, change }) => {
  return (
    <SimilarMoviesContainer>
      <SimilarMoviesHeading>Similar Movies</SimilarMoviesHeading>
      {similarMovies.length ? (
        <SimilarMoviesGrid>
          {similarMovies.slice(0, gridItems).map(movie => (
            <SimilarMovie
              key={movie.id}
              id={movie.id}
              change={change}
              posterPath={`url(https://image.tmdb.org/t/p/w500${movie.poster_path})`}
            />
          ))}
        </SimilarMoviesGrid>
      ) : (
        <p>None found.</p>
      )}
    </SimilarMoviesContainer>
  );
};

export default SimilarMoviesSection;
