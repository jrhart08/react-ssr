import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import App from '../shared/App';
import defaultRoutes from '../shared/routes';

// For pages that need to load data, we want to ensure that their
// data is loaded whenever the user navigates to this route.
const CLIENT_ROUTES = defaultRoutes.map((route) => {
  if (!route.loadData) {
    return route;
  }

  function ClientPageComponent({ loadDataOnMount, ...props }) {
    useEffect(() => {
      loadDataOnMount();
    }, []);

    return <route.component {...props} />;
  }

  ClientPageComponent.propTypes = {
    // we know this exists at this point
    loadDataOnMount: PropTypes.func.isRequired,
  };

  const mapDispatchToProps = (dispatch, ownProps) => ({
    loadDataOnMount: () => dispatch(route.loadData(ownProps.match)),
  });

  return {
    ...route,
    component: connect(null, mapDispatchToProps)(ClientPageComponent),
  };
});

const ClientApp = props => <App {...props} routes={CLIENT_ROUTES} />;

export default ClientApp;
