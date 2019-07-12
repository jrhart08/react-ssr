import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';
import routes from './routes';

export default () => (
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
