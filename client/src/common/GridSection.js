import React from 'react';
import { Heading } from '../styles/styled-components';
import styled from 'styled-components';
import GridWithPagination from './GridWithPagination';

const MoviesContainer = styled.div``;

const GridSection = ({ type, heading }) => {
  return (
    <>
      <Heading>{heading}</Heading>
      <MoviesContainer>
        <GridWithPagination type={type} />
      </MoviesContainer>
    </>
  );
};

export default GridSection;
