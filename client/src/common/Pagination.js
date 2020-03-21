import React from 'react';
import {
  PaginationContainer,
  PreviousPagination,
  NextPagination,
  PaginationButton
} from '../styles/styled-components';

const Pagination = ({
  firstMovieVisible,
  lastMovieVisible,
  showNextMovies,
  showPreviousMovies
}) => {
  return (
    <PaginationContainer>
      <PreviousPagination>
        {firstMovieVisible !== 0 && (
          <PaginationButton onClick={() => showPreviousMovies()}>
            Previous
          </PaginationButton>
        )}
      </PreviousPagination>
      <NextPagination>
        <PaginationButton onClick={() => showNextMovies()}>
          Next
        </PaginationButton>
      </NextPagination>
    </PaginationContainer>
  );
};

export default Pagination;
