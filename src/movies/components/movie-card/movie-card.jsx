import React, {useState} from 'react';
import './movie-card.scss';
import {connect} from 'react-redux';
import GenreTag from '../genre-tag/genre-tag';
import {
  deleteMovie as deleteMovieService,
  editMovie as editMovieService,
  toggleWatchedMovie as toggleWatchedMovieService
} from './../../services/movie-service';

/**
 * Component that shows a card with info about a movie
 * @param props
 * @returns {*}
 * @constructor
 */
export const MovieCard = (props) => {

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(props.name);

  /**
   * Method that enables/disables the edition of the movie's name field
   */
  const toggleEdit = () => {
    if (isEditing) {
      props.editMovie(props.id, name);
    }
    setIsEditing(!isEditing);
  };

  return(
    <>
      <div className='ma-movie-card__container'>
        <div className='ma-movie-card__info'>
          { !isEditing
            ? <div className='ma-movie-card__name'>{props.name}</div>
            : <input className='ma-movie-card__input-name' type="text" id='name' name='name'
                     value={name} onChange={e => setName(e.target.value)}/>
          }
          <div className='ma-movie-card__tag-list'>{
            props.genres.map(genre =>
              <GenreTag key={genre} value={genre}/>
            )
          }</div>
          <div>
            Watched:
            <input
              className='ma-movie-card__watched'
              type='checkbox'
              name='watched'
              checked={props.watched}
              onChange={e => props.toggleWatchedMovie(props.id, e.target.value)}
            />
          </div>
        </div>
        <div className='ma-movie-card__button-list'>
          <button className='ma-movie-card__button-edit' title='Edit movie' onClick={toggleEdit}>
            {
              isEditing
                ? 'Save'
                : 'Edit'
            }
          </button>
          <button className='ma-movie-card__button-delete' title='Delete movie'
                  onClick={() => props.deleteMovie(props.id)}>Delete</button>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  deleteMovie: id => dispatch(deleteMovieService(id)),
  toggleWatchedMovie: (id) => dispatch(toggleWatchedMovieService(id)),
  editMovie: (id, value) => dispatch(editMovieService(id, value)),
});

export default connect(null, mapDispatchToProps)(MovieCard);