import React from 'react';
import {
  MovieThumbnail,
  SimilarMoviesHeading
} from '../styles/styled-components';

const SimilarMovie = ({ id, posterPath, change }) => {
  return (
    <>
      {/* <SimilarMoviesHeading>Similar Movies</SimilarMoviesHeading> */}
      <MovieThumbnail background_img={posterPath} onClick={() => change(id)}>
        {id}
      </MovieThumbnail>
    </>
  );
};

export default SimilarMovie;
