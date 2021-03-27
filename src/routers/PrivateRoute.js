import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({isAuthenticate, component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            component={props => (
                isAuthenticate
                ?<Component {...props} />
                :<Redirect to='/auth/login' />
            )}
        />
    )
}

PrivateRoute.prototype = {
    isAuthenticate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PrivateRoute
