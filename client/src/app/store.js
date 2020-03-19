import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import moviesNowPlayingReducer from '../features/movies/moviesNowPlayingSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    moviesNowPlaying: moviesNowPlayingReducer
  }
});
