import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MoviePage from './../../movies/pages/movie-page/movie-page';

/**
 * Router of app body
 * @param props
 * @returns {*}
 * @constructor
 */
const BodyRouter = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <MoviePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default BodyRouter;