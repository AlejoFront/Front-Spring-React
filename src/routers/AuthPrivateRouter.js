import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Books from '../components/books/Books'
import Home from '../components/Home'

const AuthPrivateRouter = () => {
    
    
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/books' component={Books} />

                <Route component={Home} />
            </Switch> 
        </>
    )
}

export default AuthPrivateRouter
