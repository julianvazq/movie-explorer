import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import watchlistReducer from '../features/movies/slices/watchlistSlice';
import nowPlayingMoviesReducer from '../features/movies/slices/nowPlayingMoviesSlice';
import popularMoviesReducer from '../features/movies/slices/popularMoviesSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    watchlist: watchlistReducer,
    nowPlayingMovies: nowPlayingMoviesReducer,
    popularMovies: popularMoviesReducer
  }
});
