import { configureStore } from '@reduxjs/toolkit';
import watchlistReducer from '../features/movies/slices/watchlistSlice';
import nowPlayingMoviesReducer from '../features/movies/slices/nowPlayingMoviesSlice';
import popularMoviesReducer from '../features/movies/slices/popularMoviesSlice';
import upcomingMoviesReducer from '../features/movies/slices/upcomingMoviesSlice';
import topRatedMoviesReducer from '../features/movies/slices/topRatedMoviesSlice';

export default configureStore({
  reducer: {
    watchlist: watchlistReducer,
    nowPlayingMovies: nowPlayingMoviesReducer,
    topRatedMovies: topRatedMoviesReducer,
    popularMovies: popularMoviesReducer,
    upcomingMovies: upcomingMoviesReducer
  }
});
