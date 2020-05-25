/**
 * Movie action types
 * @type {string}
 */
export const ADD_MOVIE = 'ADD_MOVIE';
export const ADD_MOVIE_SUCCESS = 'ADD_MOVIE_SUCCESS';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const DELETE_MOVIE_SUCCESS = 'DELETE_MOVIE_SUCCESS';
export const TOGGLE_WATCHED_MOVIE = 'TOGGLE_WATCHED_MOVIE';
export const TOGGLE_WATCHED_MOVIE_SUCCESS = 'TOGGLE_WATCHED_MOVIE_SUCCESS';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const EDIT_MOVIE_SUCCESS = 'EDIT_MOVIE_SUCCESS';

/**
 * Add movie action
 * @returns {{type: string}}
 */
export const addMovie = () => ({
  type: ADD_MOVIE
});

/**
 * Add movie success action
 * @param movie
 * @returns {{movie: *, type: string}}
 */
export const addMovieSuccess = movie => ({
  type: ADD_MOVIE_SUCCESS,
  movie
});

/**
 * Get movies action
 * @returns {{type: string}}
 */
export const getMovies = () => ({
  type: GET_MOVIES,
});

/**
 * Get movies success action
 * @param movies
 * @returns {{movies: *, type: string}}
 */
export const getMoviesSuccess = movies => ({
  type: GET_MOVIES_SUCCESS,
  movies
});

/**
 * Delete movie action
 * @returns {{type: string}}
 */
export const deleteMovie = () => ({
  type: DELETE_MOVIE,
});

/**
 * Delete movie success action
 * @returns {{type: string}}
 */
export const deleteMovieSuccess = (id) => ({
  type: DELETE_MOVIE_SUCCESS,
  id
});

/**
 * Watch movie
 * @returns {{type: string}}
 */
export const toggleWatchedMovie = () => ({
  type: TOGGLE_WATCHED_MOVIE,
});

/**
 * Watch movie success action
 * @returns {{type: string}}
 */
export const toggleWatchedMovieSuccess = (id) => ({
  type: TOGGLE_WATCHED_MOVIE_SUCCESS,
  id
});

/**
 * Edit movie
 * @returns {{type: string}}
 */
export const editMovie = () => ({
  type: EDIT_MOVIE,
});

/**
 * Edit movie success action
 * @returns {{type: string}}
 */
export const editMovieSuccess = (movie) => ({
  type: EDIT_MOVIE_SUCCESS,
  movie
});