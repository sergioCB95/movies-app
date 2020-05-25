import React from 'react';
import './header.scss';

/**
 * App header
 * @param props
 * @returns {*}
 * @constructor
 */
const Header = (props) => {

  return(
    <>
      <nav className="ma-header__container">
        <a className="ma-header__link" href="/"><h1>Movie Test</h1></a>
      </nav>
    </>
  );
};

export default Header;