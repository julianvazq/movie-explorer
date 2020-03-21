import {
  fetchNowPlayingMovies,
  toggleWatchlistNowPlaying
} from './nowPlayingMoviesSlice';
import {
  fetchPopularMovies,
  toggleWatchlistPopular
} from './popularMoviesSlice';

// Handle toggle
export const handleToggle = (state, action) => {
  const { id } = action.payload;
  const movieToToggle = state.movies.find(movie => movie.id === id);
  if (movieToToggle) {
    movieToToggle.watchlisted = !movieToToggle.watchlisted;
  }
};

// Start fetching
export const setLoading = state => {
  state.status = 'loading';
};

// Fetching failed
export const setFailure = (state, action) => {
  console.log(action.payload);
  state.error = action.payload;
  state.status = 'failure';
};

// Fetching success
export const requestSuccess = (state, action) => {
  const { results, total_pages } = action.payload;
  state.movies = results;
  state.pages = total_pages;
  state.status = 'success';
};

// Returns designated fetch to component
export const determineFetch = type => {
  switch (type) {
    case 'NOW_PLAYING':
      return fetchNowPlayingMovies;
    case 'POPULAR':
      return fetchPopularMovies;
    default:
  }
};

export const determineToggleWatchlist = type => {
  switch (type) {
    case 'NOW_PLAYING':
      return toggleWatchlistNowPlaying;
    case 'POPULAR':
      return toggleWatchlistPopular;
    default:
  }
};
