import React, { useState, useCallback } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewDog from './dogs/pages/NewDog';
import UserDogs from './dogs/pages/UserDogs';
import UpdateDog from './dogs/pages/UpdateDog';
import Auth from './user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

    let routes;

    if (isLoggedIn) {
        routes = (
            <Switch>
                <Route path='/' exact>
                    <Users />
                </Route>
                <Route path='/:userId/dogs' exact>
                    <UserDogs />
                </Route>
                <Route path='/dogs/new' exact>
                    <NewDog />
                </Route>
                <Route path='/dogs/:dogId' exact>
                    <UpdateDog />
                </Route>
                <Redirect to='/' />
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route path='/' exact>
                    <Users />
                </Route>
                <Route path='/:userId/dogs' exact>
                    <UserDogs />
                </Route>
                <Route path='/auth' exact>
                    <Auth />
                </Route>
                <Redirect to='/auth' />
            </Switch>
        );
    }

    return (
        <AuthContext.Provider
            value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
        >
            <Router>
                <MainNavigation />
                <main>{routes}</main>
            </Router>
        </AuthContext.Provider>
    );
};

export default App;
