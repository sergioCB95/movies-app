import React from 'react';
import AddMovie from '../../components/add-movie/add-movie';
import './movie-page.scss';
import MovieFilteredList from '../../components/movie-filtered-list/movie-filtered-list';

/**
 * Page that shows an add movie form and a filtered list of movies
 * @param props
 * @returns {*}
 * @constructor
 */
const MoviePage = (props) => {

  return(
    <>
      <div className='ma-movie-page__container'>
        <div className='ma-movie-page__add-movie'>
          <AddMovie />
        </div>
        <MovieFilteredList />
      </div>
    </>
  );
};

export default MoviePage;