import { render } from 'react-dom';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components';
import People from './routes/people/Index';
import PersonDetails from './routes/people/Details';

const Body = styled.div`
  max-width: 1440px;
  margin: auto;
`;

function App() {
  return (
    <BrowserRouter>
      <Body>
        <Route exact path="/people/:id" component={PersonDetails} />
        <Route exact path="/people" component={People} />
      </Body>
    </BrowserRouter>
  )
}

render(<App />, document.getElementById('root'));
