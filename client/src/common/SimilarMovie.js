import React from 'react';
import { MovieThumbnail } from '../styles/styled-components';

const SimilarMovie = ({ id, posterPath, change }) => {
  return (
    <MovieThumbnail
      background_img={posterPath}
      onClick={() => change(id)}
    ></MovieThumbnail>
  );
};

export default SimilarMovie;
