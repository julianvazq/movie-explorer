// Start fetching
export const setLoading = state => {
  state.status = 'loading';
};

// Fetching failed
export const setFailure = (state, action) => {
  console.log(action.payload);
  state.error = action.payload;
  state.status = 'failure';
};

// Fetching success
export const requestSuccess = (state, action) => {
  const { results, total_pages } = action.payload;
  const withDuplicates = state.movies.concat(results);
  // Remove duplicates
  state.movies = Array.from(new Set(withDuplicates.map(movie => movie.id))).map(
    id => {
      return withDuplicates.find(movie => movie.id === id);
    }
  );
  state.pages = total_pages;
  state.status = 'success';
};

// Handle toggle
export const handleToggle = (state, action) => {
  const { id } = action.payload;
  const movieToToggle = state.movies.find(movie => movie.id === id);
  if (movieToToggle) {
    movieToToggle.watchlisted = !movieToToggle.watchlisted;
  }
};
