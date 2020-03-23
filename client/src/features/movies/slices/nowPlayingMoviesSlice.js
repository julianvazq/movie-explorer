import { createSlice } from '@reduxjs/toolkit';
import { addToLocalStorage, removeFromLocalStorage } from './watchlistSlice';
import {
  setLoading,
  setFailure,
  handleToggle,
  requestSuccess
} from './ReusableLogic';
import axios from 'axios';

export const nowPlayingMoviesSlice = createSlice({
  name: 'NOW_PLAYING_MOVIES',
  initialState: {
    movies: [],
    pages: null,
    status: 'idle',
    error: null
  },
  reducers: {
    toggle: handleToggle,
    startFetching: setLoading,
    fetchingFailed: setFailure,
    fetchingSuccess: requestSuccess
  }
});

export const {
  toggle,
  startFetching,
  fetchingFailed,
  fetchingSuccess
} = nowPlayingMoviesSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

/***  THUNKS  ***/
// Fetch Movies
export const fetchNowPlayingMovies = page => async dispatch => {
  dispatch(startFetching());
  try {
    const response = await axios.get(`/movies/nowplaying/${page}`);
    dispatch(fetchingSuccess(response.data));
  } catch (err) {
    console.log(err);
    dispatch(fetchingFailed(err.message));
  }
};

// Toggle watchlisted property | Add/remove watchlist
export const toggleWatchlistNowPlaying = selectedMovie => async dispatch => {
  dispatch(toggle(selectedMovie));

  // Add/remove logic inversed because of toggle
  if (selectedMovie.watchlisted) {
    dispatch(removeFromLocalStorage(selectedMovie));
  } else {
    dispatch(addToLocalStorage(selectedMovie));
  }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const nowPlayingState = state => ({
  movies: state.nowPlayingMovies.movies,
  pages: state.nowPlayingMovies.pages,
  status: state.nowPlayingMovies.status
});

export default nowPlayingMoviesSlice.reducer;
