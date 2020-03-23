import {
  fetchNowPlayingMovies,
  toggleWatchlistNowPlaying
} from './nowPlayingMoviesSlice';
import {
  fetchPopularMovies,
  toggleWatchlistPopular
} from './popularMoviesSlice';

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
