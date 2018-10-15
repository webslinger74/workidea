import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Layout from './components/Layout';

import PrivateRoute from './utils/PrivateRoute';
import Home from './components/Home';
import Messages from './components/admin/Messages';
import SitePerformance from './components/SitePerformance';
import Sports from './components/Sports';
import Achievements from './components/Achievments';
import Login from './components/Login';

const Routes = () => {
    
        return (
            
            <Layout>
            <Switch>

                <Route path="/"  exact component={Home}/>
                <Route path="/messages"  exact component={Messages}/>
                <Route path="/siteperformance"  exact component={SitePerformance}/>
                <Route path="/sports"  exact component={Sports}/>
                <Route path="/achievements"  exact component={Achievements}/>
                <Route path="/login" exact component={Login}/>
            </Switch>
            </Layout>

          )
    }

 
export default Routes;