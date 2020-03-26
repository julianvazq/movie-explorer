import React from 'react';
import { FullWidthContainer } from '../styles/styled-components';
import styled from 'styled-components';
import WatchlistGrid from './WatchlistGrid';

const FullWidthWatchlistContainer = styled(FullWidthContainer)`
  padding: 5rem 0.5rem;

  @media (min-width: 600px) {
    padding: 5rem 2rem;
  }
`;

const Home = () => {
  return (
    <FullWidthWatchlistContainer>
      <WatchlistGrid />
    </FullWidthWatchlistContainer>
  );
};

export default Home;
