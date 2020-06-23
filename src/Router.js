import React from 'react'
import { Switch, Route } from 'react-router'
import Listing from './components/Listing'
import Login from './components/Login'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listing} />
            <Route path="/login" component={Login} />
        </Switch>
    );
};

export default Router;