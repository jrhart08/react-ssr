import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  NavLink,
} from 'react-router-dom';
import HelloWorld from './pages/HelloWorld';
import People from './pages/People';
import Person from './pages/Person';

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
      <Route path="/hello-world" component={HelloWorld} />
      <Route path="/people" component={People} />
      <Route path="/people/:id" component={Person} />
      {true && <Redirect from="/" to="/hello-world" />}
    </Switch>
  </div>
);
