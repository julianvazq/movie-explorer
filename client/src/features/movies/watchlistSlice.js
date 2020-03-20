import { createSlice } from '@reduxjs/toolkit';

export const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState: {
    watchlist: []
  },
  reducers: {
    add: (state, action) => {
      const movieToAdd = action.payload;
      state.watchlist.push(movieToAdd);
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
  // ,
  // handleWatchlist: (state, action) => {
  //   const clickedMovie = action.payload;
  //   const movieToToggle = state.watchlist.find(
  //     movie => movie.id === clickedMovie.id
  //   );
  //   console.log(movieToToggle);
  //   if (movieToToggle) {
  //     movieToToggle.watchlisted = !movieToToggle.watchlisted;
  //   } else {
  //     state.watchlist.push(clickedMovie);
  //   }
  // }
  //   }
});

export const { add, remove } = watchlistSlice.actions;

export const watchlistState = state => ({
  watchlist: state.watchlist.watchlist
});

// Thunk -- Add/remove from watchlist
export const handleWatchlist = selectedMovie => async (dispatch, getState) => {
  console.log('from watchlistSlice: ', selectedMovie);
  //   const watchlist = getState().watchlist.watchlist;
  //   //   console.log(watchlist);
  //   const index = watchlist.findIndex(movie => movie.id === selectedMovie.id);

  //   // If index not found, add movie to watchlist
  //   if (index === -1) {
  //     dispatch(add(selectedMovie));
  //   } else {
  //     dispatch(remove(index));
  //   }
};

export default watchlistSlice.reducer;
