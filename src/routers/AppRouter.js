import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import { startChecking } from '../actions/auth'
import AuthPrivateRouter from './AuthPrivateRouter'
import AuthRouter from './AuthRouter'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
    const dispatch = useDispatch();
    const {uid, checking} = useSelector(state => state.auth);


    useEffect(() => {
        dispatch(startChecking())
    }, [dispatch])

    if (checking) {
        return <h5>Espere...</h5>
    }

    return (
        <Router>
            <Switch>
                <PublicRoute
                    path='/auth'
                    component={ AuthRouter }
                    isAuthenticate={!!uid}
                    />
                <PrivateRoute 
                    path='/'
                    component={ AuthPrivateRouter }
                    isAuthenticate={!!uid}
                />

                <Redirect to='/auth/login' />
            </Switch>
        </Router>
    )
}

export default AppRouter
