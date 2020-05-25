/**
 * Selector that gets the movies in the state
 * @param store
 * @returns {this}
 */
export const getMovieList = store => store.movieReducers.movies
  .sort((a, b) => (a.watched === b.watched)
    ? a.name.localeCompare(b.name)
    : a.watched ? 1 : -1
  );

/**
 * Selector that gets the movies in the state filtered by their name and/or genres
 * @param store
 * @param name
 * @param genre
 * @returns {*}
 */
export const getFilterMovieList = (store, name, genre) => {
  let movieList = getMovieList(store);
  if (name) {
    movieList = movieList.filter(movie => movie.name.toLowerCase().startsWith(name.toLowerCase()));
  }
  if (genre) {
    movieList = movieList.filter(movie => movie.genres.find(g => g.toLowerCase() === genre.toLowerCase()));
  }
  return movieList;
};

export const isFetching = store => store.movieReducers.isFetching;