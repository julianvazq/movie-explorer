import React from 'react';
import { Heading } from '../styles/styled-components';
import styled from 'styled-components';
import GridWithPagination from './GridWithPagination';
import { MovieSectionContainer } from '../styles/styled-components';

const GridSection = ({ type, heading }) => {
  return (
    <MovieSectionContainer>
      <Heading>{heading}</Heading>
      <GridWithPagination type={type} />
    </MovieSectionContainer>
  );
};

export default GridSection;
