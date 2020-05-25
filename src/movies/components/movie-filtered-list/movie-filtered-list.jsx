import React, {useEffect, useState} from 'react';
import {GenreList} from '../../movie';
import {getMovieList, getFilterMovieList, isFetching} from '../../redux/selectors/selectors';
import {connect} from 'react-redux';
import './movie-filtered-list.scss';
import Spinner from '../../../shared/components/spinner/spinner';
import { withRouter , useLocation, useHistory } from 'react-router-dom';
import MovieList from '../movie-list/movie-list';
import PropTypes from 'prop-types';
import { getMovies as getMoviesService } from './../../services/movie-service';

/**
 * Component that shows a list of movies and a filtering form to filter the movies shown
 * @param props
 * @returns {*}
 * @constructor
 */
export const MovieFilteredList = (props) => {

  const [genre, setGenre] = useState('');
  const [name, setName] = useState('');
  const [dataLoaded, setDataLoaded] = useState(false);

  // Getting info about the url
  const urlSearch = new URLSearchParams(useLocation().search);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if(!dataLoaded) {
      // Getting url query info
      if (urlSearch.get('name')) {
        setName(urlSearch.get('name'));
      }
      if (urlSearch.get('genre')) {
        setGenre(urlSearch.get('genre'));
      }

      // Setting up movie list
      props.getMovies(props.movies);
      setDataLoaded(true);
    }
    }, [dataLoaded, urlSearch, props]
  );

  /**
   * Method that handles changes in the filtering form
   * @param value
   * @param setter
   * @param name
   */
  const onFilterChange = (value, setter, name) => {
    setter(value);
    urlSearch.set(name, value);
    history.push(location.pathname + '?' + urlSearch.toString());
    props.getMovies(props.movies);
  };

  /**
   * Method that resets the filtering form
   * @param evt
   */
  const resetFilter = evt => {
    evt.preventDefault();
    setGenre(null);
    setName('');
    history.push(location.pathname);
    props.getMovies(props.movies);
  };

  return (
    <>
      <div className='ma-movie-filtered-list__container'>
        <h2>Movie List</h2>
        <form className='ma-movie-filtered-list__filtering-form'>
          <div className='ma-movie-filtered-list__gender-filtering-buttons'>
            {
              GenreList.map(item =>
                <div key={item} className='ma-movie-filtered-list__gender-filtering-button'>
                  <input
                    type='radio'
                    name='genre'
                    value={item}
                    checked={genre && genre.toLowerCase() === item.toLowerCase()}
                    onChange={e => onFilterChange(e.target.value, setGenre, 'genre')}
                  /> {item}
                </div>
              )
            }
            <button className='ma-movie-filtered-list__reset-button' onClick={resetFilter}>Reset</button>
          </div>
          <input
            className='ma-movie-filtered-list__search-input'
            type='text'
            placeholder='Search movie by name'
            value={name}
            onChange={e => onFilterChange(e.target.value, setName, 'name')}
          />
        </form>
          <div className='ma-movie-filtered-list__list'>
            {
              ! props.isFetching
                ? <MovieList movies={props.filteredMovies(name, genre)} />
                :  <div className='ma-movie-filtered-list__spinner-wrapper'><Spinner/></div>
            }
          </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  movies:  getMovieList(state),
  filteredMovies: (name, genre) => getFilterMovieList(state, name, genre),
  isFetching: isFetching(state)
});

const mapDispatchToProps = dispatch => ({
  getMovies: (movies) => dispatch(getMoviesService(movies))
});

MovieFilteredList.propTypes = {
  movies: PropTypes.array.isRequired,
  filteredMovies: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  getMovies: PropTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieFilteredList));