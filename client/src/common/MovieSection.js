import React from 'react';
import GridSection from './GridSection';
import { FullWidthContainer } from '../styles/styled-components';

const MovieSection = () => {
  return (
    <FullWidthContainer>
      <GridSection
        type='NOW_PLAYING'
        selector='nowPlayingMovies'
        heading='Now Playing'
      />
      <GridSection
        type='TOP_RATED'
        selector='topRatedMovies'
        heading='Top Rated'
      />
      <GridSection type='POPULAR' selector='popularMovies' heading='Popular' />
      <GridSection
        type='UPCOMING'
        selector='upcomingMovies'
        heading='Upcoming'
      />
    </FullWidthContainer>
  );
};

export default MovieSection;
