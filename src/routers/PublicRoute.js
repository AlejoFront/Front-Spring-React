import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
const PublicRoute = ({isAuthenticate, component: Component,...rest}) => {
    return (
        <Route
            {...rest}
            component={ props => (
                !isAuthenticate
                ? <Component {...props} />
                : <Redirect to='/' />
            )}
        />
    )
}

PublicRoute.prototype = {
    isAuthenticate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}

export default PublicRoute
