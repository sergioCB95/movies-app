import React, { useState } from 'react';
import { connect } from 'react-redux';
import './add-movie.scss';
import GenreTag from './../genre-tag/genre-tag';
import { addMovie as addMovieService } from './../../services/movie-service';
import PropTypes from 'prop-types';

/**
 * Components that renders an add movie form
 * @param props
 * @returns {*}
 * @constructor
 */
export const AddMovie = (props) => {

  const [name, setName] = useState('');
  const [genres, setGenres] = useState([]);

  /**
   * Methods that adds movie with the info in the form
   * @param evt
   */
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addMovie({id: Math.random(), name, genres, watched: false});
    setName('');
    setGenres([]);
  };

  /**
   * Method that adds a genre to the list of movie genres
   * @param e
   */
  const onAddGenre = (e) => {
    if(e.key === 'Enter') {
      e.preventDefault();
      let newGenre = e.target.value.toLowerCase();
      if(!genres.find(genre => genre === newGenre)){
        setGenres([...genres, newGenre]);
      }
      e.target.value = '';
    }
  };

  return(
    <>
      <div className='ma-add-movie__container'>
        <h2>Add a New Movie</h2>
        <form onSubmit={handleSubmit} className='ma-add-movie__form'>
          <div className='ma-add-movie__form-fields'>
            <div className='ma-add-movie__name'>
              <label className='ma-add-movie__form-field'>
                Choose name:
                <input
                  className='ma-add-movie__input-field'
                  type='text'
                  id='name'
                  name='name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='ma-add-movie__genres'>
              <label className='ma-add-movie__form-field'>
                Add genres:
                <input
                  className='ma-add-movie__input-field'
                  type='text'
                  id='genre'
                  name='genre'
                  onKeyPress={onAddGenre}
                />
              </label>
            </div>
          </div>
          {
            genres.length > 0
            ? <div className='ma-add-movie__genre-tags'>
                {
                  genres.map(genre =>
                    <GenreTag key={genre} value={genre}/>
                  )
                }
              </div> : null
          }
          <div>
            <input className='ma-add-movie__button' type='submit' value='Add Movie'/>
          </div>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  addMovie: movie => dispatch(addMovieService(movie))
});

AddMovie.propTypes = {
  addMovie: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(AddMovie);