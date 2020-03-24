import {
  fetchNowPlayingMovies,
  toggleWatchlistNowPlaying
} from './nowPlayingMoviesSlice';
import {
  fetchUpcomingMovies,
  toggleWatchlistUpcoming
} from './upcomingMoviesSlice';
import {
  fetchTopRatedMovies,
  toggleWatchlistTopRated
} from './topRatedMoviesSlice';
import {
  fetchPopularMovies,
  toggleWatchlistPopular
} from './popularMoviesSlice';

// Returns designated fetch to component
export const determineFetch = type => {
  switch (type) {
    case 'NOW_PLAYING':
      return fetchNowPlayingMovies;
    case 'UPCOMING':
      return fetchUpcomingMovies;
    case 'TOP_RATED':
      return fetchTopRatedMovies;
    case 'POPULAR':
      return fetchPopularMovies;
    default:
  }
};

export const determineToggleWatchlist = type => {
  switch (type) {
    case 'NOW_PLAYING':
      return toggleWatchlistNowPlaying;
    case 'UPCOMING':
      return toggleWatchlistUpcoming;
    case 'TOP_RATED':
      return toggleWatchlistTopRated;
    case 'POPULAR':
      return toggleWatchlistPopular;
    default:
  }
};
