import { createSlice } from '@reduxjs/toolkit';

export const watchlistSlice = createSlice({
  name: 'WATCHLIST',
  initialState: {
    watchlist: []
  },
  reducers: {
    getLocalStorageSuccess: (state, action) => {
      const watchlistedMovies = action.payload;
      state.watchlist = watchlistedMovies;
    },
    add: (state, action) => {
      const movieToAdd = action.payload;
      const found = state.watchlist.find(movie => movie.id === movieToAdd.id);
      if (!found) {
        state.watchlist.push(movieToAdd);
      }
    },
    remove: (state, action) => {
      const selectedMovie = action.payload;
      const index = state.watchlist.findIndex(
        movie => movie.id === selectedMovie.id
      );
      if (index !== -1) {
        state.watchlist.splice(index, 1);
      }
    }
  }
});

export const { getLocalStorageSuccess, add, remove } = watchlistSlice.actions;

// Thunks

export const fetchLocalStorage = () => async (dispatch, getState) => {
  try {
    const storedMovies = JSON.parse(localStorage.getItem('movies') || '[]');
    dispatch(getLocalStorageSuccess(storedMovies));
  } catch (error) {
    console.log(error);
  }
};

export const addToLocalStorage = selectedMovie => async dispatch => {
  const storedMovies = JSON.parse(localStorage.getItem('movies') || '[]');

  const found = storedMovies.find(movie => movie.id === selectedMovie.id);
  if (!found) {
    storedMovies.push(selectedMovie);
    dispatch(add(selectedMovie));
  }
  localStorage.setItem('movies', JSON.stringify(storedMovies));
};

export const removeFromLocalStorage = selectedMovie => async dispatch => {
  const storedMovies = JSON.parse(localStorage.getItem('movies') || '[]');

  const index = storedMovies.findIndex(movie => movie.id === selectedMovie.id);
  if (index !== -1) {
    storedMovies.splice(index, 1);
    dispatch(remove(selectedMovie));
  }
  localStorage.setItem('movies', JSON.stringify(storedMovies));
};

export const toggleWatchlist = selectedMovie => async (dispatch, getState) => {
  const watchlist = getState().watchlist.watchlist;
  const found = watchlist.find(movie => movie.id === selectedMovie.id);

  if (found) {
    dispatch(removeFromLocalStorage(selectedMovie));
  } else {
    dispatch(addToLocalStorage(selectedMovie));
  }
};

export const watchlistState = state => ({
  watchlist: state.watchlist.watchlist
});

export default watchlistSlice.reducer;
