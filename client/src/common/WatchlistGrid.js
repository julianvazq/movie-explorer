import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocalStorage } from '../features/movies/slices/watchlistSlice';
import { Link } from 'react-router-dom';
import {
  watchlistState,
  toggleWatchlist,
} from '../features/movies/slices/watchlistSlice';
import {
  Grid,
  Heading,
  MovieSectionContainer,
} from '../styles/styled-components';
import styled from 'styled-components';
import axios from 'axios';
import MovieCard from './MovieCard';
import Alert from './Alert';

const WatchlistHeading = styled(Heading)`
  font-size: 2rem !important;
  margin-bottom: 2rem;
`;

const WatchlistGrid = () => {
  const dispatch = useDispatch();
  const { watchlist } = useSelector(watchlistState);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  const fetchRecommendations = async () => {
    let newRecommendations = [];

    for (const movie of watchlist) {
      const { id } = movie;
      const response = await axios.get(`/movies/${id}/recommendations/1`);

      let newMovies = response.data.results || [];
      if (newMovies.length) {
        newMovies = newMovies.slice(0, 5);
      }
      const uniqueMovies = removeDuplicates(newRecommendations, newMovies);
      newRecommendations = [...uniqueMovies];
    }
    const newMoviesRecommended = filterOutWatchlist(newRecommendations);
    setRecommendedMovies(newMoviesRecommended);
  };

  const filterOutWatchlist = (recommendations) => {
    const filteredRecommendations = recommendations.filter(
      (movie) => !watchlist.some((m) => m.id === movie.id)
    );

    return filteredRecommendations;
  };

  const removeDuplicates = (firstArray, secondArray) => {
    const combinedArrays = [...firstArray, ...secondArray];
    const uniqueMovies = combinedArrays.filter(
      (movie, index, self) => index === self.findIndex((m) => m.id === movie.id)
    );
    return uniqueMovies;
  };

  useEffect(() => {
    // Initialize LocalStorage
    dispatch(fetchLocalStorage());
  }, []);

  useEffect(() => {
    fetchRecommendations();
  }, [watchlist]);

  return (
    <>
      <WatchlistHeading>In Your Watchlist</WatchlistHeading>
      {watchlist.length ? (
        <>
          <MovieSectionContainer>
            <Grid>
              {watchlist.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  toggleWatchlist={toggleWatchlist}
                />
              ))}
            </Grid>
          </MovieSectionContainer>
          {recommendedMovies.length > 0 && (
            <Heading style={{ marginBottom: '3rem' }}>
              Based on your watchlist, you <em>may</em> enjoy...
            </Heading>
          )}
          <Grid>
            {recommendedMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                toggleWatchlist={toggleWatchlist}
              />
            ))}
          </Grid>
        </>
      ) : (
        <Alert>
          <p>There doesn't seem to be anything in your watchlist...</p>
          <Link to='/'>Let's browse some movies</Link>
        </Alert>
      )}
    </>
  );
};

export default WatchlistGrid;
