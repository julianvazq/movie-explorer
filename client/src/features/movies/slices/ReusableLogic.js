import { useSelector, useDispatch } from 'react-redux';
import {
  nowPlayingState,
  fetchNowPlayingMovies,
  toggleWatchlistNowPlaying
} from './nowPlayingMoviesSlice';
import {
  popularMoviesState,
  fetchPopularMovies,
  toggleWatchlistPopular
} from './popularMoviesSlice';

export const determineFetch = type => {
  switch (type) {
    case 'NOW_PLAYING':
      return fetchNowPlayingMovies;
    case 'POPULAR':
      return fetchPopularMovies;
    default:
  }
};
