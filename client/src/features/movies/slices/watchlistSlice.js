import { createSlice } from '@reduxjs/toolkit';

export const watchlistSlice = createSlice({
  name: 'WATCHLIST',
  initialState: {
    watchlist: []
  },
  reducers: {
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

export const { add, remove } = watchlistSlice.actions;

// Thunk
export const toggleWatchlist = selectedMovie => async (dispatch, getState) => {
  const watchlist = getState().watchlist.watchlist;
  const found = watchlist.find(movie => movie.id === selectedMovie.id);

  if (found) {
    dispatch(remove(selectedMovie));
  } else {
    dispatch(add(selectedMovie));
  }
};

export const watchlistState = state => ({
  watchlist: state.watchlist.watchlist
});

export default watchlistSlice.reducer;
