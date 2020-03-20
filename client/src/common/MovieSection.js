import React from 'react';
import GridSection from './GridSection';
import { FullWidthContainer, Heading } from '../styles/styled-components';

const MovieSection = () => {
  return (
    <FullWidthContainer>
      <GridSection type='NOW_PLAYING' heading='Now Playing in Theatres' />
      <GridSection type='POPULAR' heading='Popular' />
    </FullWidthContainer>
  );
};

export default MovieSection;
