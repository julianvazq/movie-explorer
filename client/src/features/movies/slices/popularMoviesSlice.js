import { createSlice } from '@reduxjs/toolkit';
import { add, remove } from './watchlistSlice';
import {
  setLoading,
  setFailure,
  handleToggle,
  requestSuccess
} from './ReusableLogic';
import axios from 'axios';

export const popularMoviesSlice = createSlice({
  name: 'POPULAR_MOVIES',
  initialState: {
    movies: [],
    pages: null,
    status: 'idle',
    error: null
  },
  reducers: {
    toggle: (state, action) => {
      const { id } = action.payload;
      const movieToToggle = state.movies.find(movie => movie.id === id);
      if (movieToToggle) {
        movieToToggle.watchlisted = !movieToToggle.watchlisted;
      }
    },
    startFetching: state => {
      state.status = 'loading';
    },
    fetchingSuccess: (state, action) => {
      const { results, total_pages } = action.payload;
      state.movies = results;
      state.pages = total_pages;
      state.status = 'success';
    },
    fetchingFailed: (state, action) => {
      console.log(action.payload);
      state.error = action.payload;
      state.status = 'failure';
    }
  }
});

export const {
  toggle,
  startFetching,
  fetchingFailed,
  fetchingSuccess
} = popularMoviesSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

/***  THUNKS  ***/
// Fetch Movies
export const fetchPopularMovies = page => async dispatch => {
  dispatch(startFetching());
  try {
    const response = await axios.get(`/movies/popular/${page}`);
    dispatch(fetchingSuccess(response.data));
  } catch (err) {
    console.log(err);
    dispatch(fetchingFailed(err.message));
  }
};

// Toggle watchlisted property | Add/remove watchlist
export const toggleWatchlistPopular = selectedMovie => async dispatch => {
  dispatch(toggle(selectedMovie));

  // Add/remove logic inversed because of toggle
  if (selectedMovie.watchlisted) {
    dispatch(remove(selectedMovie));
  } else {
    dispatch(add(selectedMovie));
  }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const popularMoviesState = state => ({
  movies: state.popularMovies.movies,
  pages: state.popularMovies.pages,
  status: state.popularMovies.status
});

export default popularMoviesSlice.reducer;
