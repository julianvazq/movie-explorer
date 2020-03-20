import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import watchlistReducer from '../features/movies/watchlistSlice';
import moviesNowPlayingReducer from '../features/movies/moviesNowPlayingSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    watchlist: watchlistReducer,
    moviesNowPlaying: moviesNowPlayingReducer
  }
});
