import React, { Component } from 'react';
import Header from '../Component/Header/Header';
import Dashboard from './Dashboard/Dashboard';
import Pokemon from './Pokemon/Pokemon';
import { Switch, Route } from "react-router-dom";
class Layout extends Component {
    render() {
        return (
            <div className='App'>
                <Header />

                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/pokemon/:pokemonId" component={Pokemon} />
                </Switch>

            </div>
        )
    }
}

export default Layout;