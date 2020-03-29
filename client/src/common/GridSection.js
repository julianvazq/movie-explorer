import React from 'react';
import { Heading } from '../styles/styled-components';
import GridWithPagination from './GridWithPagination';
import { MovieSectionContainer } from '../styles/styled-components';

const GridSection = ({ type, selector, heading }) => {
  return (
    <MovieSectionContainer>
      <Heading>{heading}</Heading>
      <GridWithPagination type={type} selector={selector} />
    </MovieSectionContainer>
  );
};

export default GridSection;
