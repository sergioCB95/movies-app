import React from 'react';
import MovieCard from '../movie-card/movie-card';
import './movie-list.scss';

/**
 * Component that shows a list of movies
 * @param props
 * @returns {*}
 * @constructor
 */
const MovieList = (props) => {

  return (
    props.movies.map(movie =>
      <div key={movie.id} className='ma-movie-list__movie-card'>
        <MovieCard {...movie}/>
      </div>
    )
  );
};

export default MovieList;