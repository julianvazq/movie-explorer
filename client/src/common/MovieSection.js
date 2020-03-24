import React from 'react';
import GridSection from './GridSection';
import { FullWidthContainer } from '../styles/styled-components';

const MovieSection = () => {
  return (
    <FullWidthContainer>
      <GridSection type='NOW_PLAYING' heading='Now Playing in Theatres' />
      <GridSection type='TOP_RATED' heading='Top Rated' />
      <GridSection type='POPULAR' heading='Popular' />
      <GridSection type='UPCOMING' heading='Upcoming' />
    </FullWidthContainer>
  );
};

export default MovieSection;
