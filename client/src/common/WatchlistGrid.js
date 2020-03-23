import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  watchlistState,
  toggleWatchlist
} from '../features/movies/slices/watchlistSlice';
import { Grid, Heading } from '../styles/styled-components';
import styled from 'styled-components';
import MovieCard from './MovieCard';
import Alert from './Alert';

const WatchlistHeading = styled(Heading)`
  font-size: 2rem !important;
  margin-bottom: 3rem;
`;

const RedirectButton = styled(Link)`
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.5px;
  padding: 0.75rem 1rem;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.light};
  border: 1px solid ${props => props.theme.gold};
  text-decoration: none !important;
  transition: background 250ms ease-in;

  &:hover {
    color: ${props => props.theme.dark};
    background: ${props => props.theme.gold};
  }
`;

const WatchlistGrid = () => {
  const { watchlist } = useSelector(watchlistState);

  return (
    <>
      <WatchlistHeading>In Your Watchlist</WatchlistHeading>
      {watchlist.length ? (
        <Grid>
          {watchlist.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              toggleWatchlist={toggleWatchlist}
              //   gridItems={gridItems}
            />
          ))}
        </Grid>
      ) : (
        <Alert
          button={
            <RedirectButton as={Link} to='/'>
              Let's browse some movies
            </RedirectButton>
          }
          message="There doesn't seem to be anything in your watchlist..."
        ></Alert>
      )}
    </>
  );
};

export default WatchlistGrid;
