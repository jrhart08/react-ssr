import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';
import defaultRoutes from './routes';

const App = ({ routes }) => (
  <div>
    <ul>
      <li>
        <NavLink to="/">Home (Redirects to Hello World)</NavLink>
      </li>
      <li>
        <NavLink to="/hello-world">Hello World</NavLink>
      </li>
      <li>
        <NavLink to="/people">People List</NavLink>
      </li>
    </ul>
    <Switch>
      {
        routes.map(route => <Route key={route.path} {...route} />)
      }
      <Redirect from="/" to="/hello-world" />
    </Switch>
  </div>
);

App.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    component: PropTypes.func,
    loadData: PropTypes.func,
  })),
};

App.defaultProps = {
  routes: defaultRoutes,
};

export default App;
