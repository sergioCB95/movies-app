import React from 'react';
import './spinner.scss';

/**
 * Custom Spinner
 * Based on https://tobiasahlin.com/spinkit/
 * @param props
 * @returns {*}
 * @constructor
 */
const Spinner = (props) => {

  return(
    <>
      <div className="ma-spinner">
        <div className="ma-spinner-dot"/>
        <div className="ma-spinner-dot"/>
        <div className="ma-spinner-dot"/>
        <div className="ma-spinner-dot"/>
        <div className="ma-spinner-dot"/>
        <div className="ma-spinner-dot"/>
      </div>
    </>
  );
};

export default Spinner;