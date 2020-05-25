import React from 'react';
import './genre-tag.scss';

/**
 * Component that shows a genre tag
 * @param props
 * @returns {*}
 * @constructor
 */
const GenreTag = (props) => {

  return(
    <>
      <div className='ma-genre-tag'>{props.value}</div>
    </>
  );
};

export default GenreTag;