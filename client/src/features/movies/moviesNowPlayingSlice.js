import { createSlice } from '@reduxjs/toolkit';

export const moviesNowPlayingSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    loading: false,
    error: null
  },
  reducers: {
    add: (state, { payload }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const newTodo = payload;
      state.todos.push(newTodo);
    },
    remove: (state, action) => {
      const index = state.todos.findIndex(todo => todo.id === action.payload);
      state.todos.splice(index, 1);
    },
    toggle: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
    startFetching: state => {
      state.loading = true;
    },
    getNowPlayingSuccess: (state, action) => {
      const { results } = action.payload;
      state.movies = results;
      state.loading = false;
    },
    getNowPlayingFailed: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const {
  startFetching,
  getNowPlayingFailed,
  getNowPlayingSuccess
} = moviesNowPlayingSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

export const fetchMovies = () => async dispatch => {
  try {
    dispatch(startFetching());
    const data = await fetch('/movies/nowplaying');
    const movies = await data.json();
    dispatch(getNowPlayingSuccess(movies));
    // console.log(movies);
  } catch (error) {
    dispatch(getNowPlayingFailed(error));
    console.log(error);
  }
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

export const moviesNowPlayingState = state => ({
  movies: state.moviesNowPlaying.movies,
  loading: state.moviesNowPlaying.loading
});

export default moviesNowPlayingSlice.reducer;
