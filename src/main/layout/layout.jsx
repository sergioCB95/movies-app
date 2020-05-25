import React from 'react';
import Header from './../../shared/components/header/header';
import BodyRouter from '../body-router/body-router';

/**
 * Basic app component layout
 * @param props
 * @returns {*}
 * @constructor
 */
const Layout = (props) => {
  return (
    <div className="ma-layout">
      <Header/>
      <BodyRouter/>
    </div>
  );
};

export default Layout;