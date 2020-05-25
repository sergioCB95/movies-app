import {
  ADD_MOVIE, ADD_MOVIE_SUCCESS,
  DELETE_MOVIE, DELETE_MOVIE_SUCCESS,
  GET_MOVIES, GET_MOVIES_SUCCESS,
  TOGGLE_WATCHED_MOVIE, TOGGLE_WATCHED_MOVIE_SUCCESS,
  EDIT_MOVIE, EDIT_MOVIE_SUCCESS
} from '../actions/actions';
import data from '../../../data';

const initialState = {
  movies: data,
  isFetching: false
};

/**
 * Movie Reducer
 * @param state
 * @param action
 * @returns {{movies: ([{watched: boolean, genres: [string], name: string, id: number}, {watched: boolean, genres: [string], name: string, id: number}, {watched: boolean, genres: [string], name: string, id: number}, {watched: boolean, genres: [string, string], name: string, id: number}]|({watched: boolean, genres: [string], name: string, id: number}|{watched: boolean, genres: [string], name: string, id: number}|{watched: boolean, genres: [string], name: string, id: number}|{watched: boolean, genres: [string, string], name: string, id: number}|*)[]|[{watched: boolean, genres: [string], name: string, id: number}]|[{watched: boolean, genres: [string], name: string, id: number}]|[{watched: boolean, genres: [string], name: string, id: number}]|Validator<NonNullable<any[]>>), isFetching: boolean}|{movies: ({watched: boolean, genres: [string], name: string, id: number}|{watched: boolean, genres: [string], name: string, id: number}|{watched: boolean, genres: [string], name: string, id: number}|{watched: boolean, genres: [string, string], name: string, id: number})[], isFetching: boolean}|{movies: [{watched: boolean, genres: [string], name: string, id: number}, {watched: boolean, genres: [string], name: string, id: number}, {watched: boolean, genres: [string], name: string, id: number}, {watched: boolean, genres: [string, string], name: string, id: number}], isFetching: boolean}|{movies: ({watched: boolean, genres: [string], name: string, id: number}|{watched: boolean, genres: [string], name: string, id: number}|{watched: boolean, genres: [string], name: string, id: number}|{watched: boolean, genres: [string, string], name: string, id: number}|*)[], isFetching: boolean}|{movies: [{watched: boolean, genres: [string], name: string, id: number}, {watched: boolean, genres: [string], name: string, id: number}, {watched: boolean, genres: [string], name: string, id: number}, {watched: boolean, genres: [string, string], name: string, id: number}], isFetching: boolean}}
 */
const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {...state, isFetching: true };

    case ADD_MOVIE_SUCCESS:
      return {...state, isFetching: false, movies: [...state.movies, action.movie]};

    case GET_MOVIES:
      return {...state, isFetching: true };

    case GET_MOVIES_SUCCESS:
      return {...state, isFetching: false, movies: action.movies };

    case DELETE_MOVIE:
      return {...state, isFetching: true };

    case DELETE_MOVIE_SUCCESS:
      return {...state, isFetching: false, movies: state.movies.filter(movie => movie.id !== action.id) };

    case TOGGLE_WATCHED_MOVIE:
      return {...state, isFetching: true };

    case TOGGLE_WATCHED_MOVIE_SUCCESS:
      return {...state, isFetching: false,
        movies: state.movies.map(movie => {
          if(movie.id === action.id) {
            movie.watched = !movie.watched;
          }
          return movie;
        })
      };

    case EDIT_MOVIE:
      return {...state, isFetching: true };

    case EDIT_MOVIE_SUCCESS:
      return {...state, isFetching: false,
        movies: state.movies.map(movie => {
          if(movie.id === action.movie.id) {
            movie.name = action.movie.value;
          }
          return movie;
        })
      };

    default:
      return state;
  }
};

export default movieReducer;