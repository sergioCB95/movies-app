import {
  addMovie as addMovieAction, addMovieSuccess,
  deleteMovie as deleteMovieAction, deleteMovieSuccess,
  editMovie as editMovieAction, editMovieSuccess,
  getMovies as getMoviesAction, getMoviesSuccess,
  toggleWatchedMovie as toggleWatchedMovieAction, toggleWatchedMovieSuccess
} from '../redux/actions/actions';

const timeout = 3000;

/**
 * Method that mocks a call to an API Call
 * @param value
 * @returns {Promise<unknown>}
 */
const mockCall = value => {
  return new Promise((resolve, reject) =>
    setTimeout(() =>
        resolve(value),
      timeout
    )
  );
};

/**
 * Template method for API calls
 * @param apiCall
 * @param data
 * @param action
 * @param successAction
 * @returns {function(...[*]=)}
 */
const apiCall = (apiCall, data, action, successAction) => {
  return (dispatch) => {
    dispatch(action());
    apiCall(data)
      .then(result => dispatch(successAction(result)));
  }
};

/**
 * Add movie API call
 * @param data
 * @returns {function(...[*]=)}
 */
const addMovie = (data) => apiCall(mockCall, data, addMovieAction, addMovieSuccess);

/**
 * Delete movie API call
 * @param id
 * @returns {function(...[*]=)}
 */
const deleteMovie = (id) => apiCall(mockCall, id, deleteMovieAction, deleteMovieSuccess);

/**
 * edit movie API call
 * @param id
 * @param value
 * @returns {function(...[*]=)}
 */
const editMovie = (id, value) => apiCall(mockCall, {id, value}, editMovieAction, editMovieSuccess);

/**
 * Get movies API call
 * @param movies
 * @returns {function(...[*]=)}
 */
const getMovies = movies => apiCall(mockCall, movies, getMoviesAction, getMoviesSuccess);

/**
 * Toggle movie's watched field API call
 * @param id
 * @returns {function(...[*]=)}
 */
const toggleWatchedMovie = id => apiCall(mockCall, id, toggleWatchedMovieAction, toggleWatchedMovieSuccess);

export {addMovie, deleteMovie, editMovie, getMovies, toggleWatchedMovie};