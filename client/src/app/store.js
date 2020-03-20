import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import watchlistReducer from '../features/movies/slices/watchlistSlice';
import moviesNowPlayingReducer from '../features/movies/slices/nowPlayingMoviesSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    watchlist: watchlistReducer,
    moviesNowPlaying: moviesNowPlayingReducer
  }
});
