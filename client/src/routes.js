import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Layout from './components/Layout';

import PrivateRoute from './utils/PrivateRoute';
import Home from './components/Home';
import Manager from './components/admin/Manager';
import Messages from './components/admin/Messages';
import SitePerformance from './components/SitePerformance';
import Sports from './components/Sports';
import Login from './components/Login';
import MessageBoard from './components/MessageBoard';
import InputBingo from './components/admin/InputBingo';
//import Feedback from './components/Feedback';
//import Manager from './components/Manager';
import UserDashboard from './components/admin/UserDashboard';
import SportsAdmin from './components/admin/SportsAdmin';
import WellBeingAdmin from './components/admin/WellbeingAdmin';
import AsyncFeedback from './components/AsyncFeedback';
import AsyncManager from './components/AsyncManager';
import Bingo from './components/Bingo';
import Events from './components/Events';
import WellBeingEvents from './components/WellbeingEvents';

const Routes = () => {
    
        return (
            
            <Layout>
            <Switch>

                <Route path="/"  exact component={Home}/>
                <Route path="/userdashboard"  exact component={UserDashboard}/>
                <Route path="/messages"  exact component={Messages}/>
                <Route path="/managerMessage" exact component={Manager} />
                <Route path="/siteperformance"  exact component={SitePerformance}/>
                <Route path="/bingo"  exact component={Bingo}/>
                <Route path="/events"  exact component={Events}/>
                <Route path="/sportsAdmin"  exact component={SportsAdmin}/>
                <Route path="/wellbeingAdmin"  exact component={WellBeingAdmin}/>
                <Route path="/sports/bingo" exact component={InputBingo}/>
                <Route path="/wellbeingEvents"  exact component={WellBeingEvents}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/messageboard" exact component={MessageBoard}/>
                <Route path="/manager" exact component={AsyncManager}/>

                <Route path="/feedback" exact component={AsyncFeedback}/>

            </Switch>
            </Layout>

          )
    }

 
export default Routes;