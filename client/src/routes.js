import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Layout from './components/Layout';

import PrivateRoute from './utils/PrivateRoute';
import Home from './components/Home';
import Manager from './components/admin/Manager';
import Messages from './components/admin/Messages';
import SitePerformance from './components/SitePerformance';
import Login from './components/Login';
import MessageBoard from './components/MessageBoard';
import InputBingo from './components/admin/InputBingo';
import UserDashboard from './components/admin/UserDashboard';
import SportsAdmin from './components/admin/SportsAdmin';
import WellBeingAdmin from './components/admin/WellbeingAdmin';
import AsyncFeedback from './components/AsyncFeedback';
import AsyncManager from './components/AsyncManager';
import Bingo from './components/Bingo';
import Events from './components/Events';
import WellBeingEvents from './components/WellbeingEvents';
import SitePerformanceEngagement from './components/admin/SitePerformanceEngagement';
import CharityContributions from './components/CharityContributions';
import News from './components/News';
import ChristmasParty from './components/ChristmasParty';
import InputChristmasParty from './components/admin/InputChristmasParty';
import InputCelebrationDay from './components/admin/InputCelebrationDay';
import CelebrationDay from './components/CelebrationDay';
import WellbeingHealthFood from './components/WellbeingHealthFood';
import WellBeingHealthAtWork from './components/WellBeingHealthAtWork';
import WellBeingCharity from './components/WellBeingCharity';
import WellbeingKeepFit from './components/WellbeingKeepFit';

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
                <Route path="/siteperformanceEngAdmin"  exact component={SitePerformanceEngagement}/>
                <Route path="/wellbeingAdmin"  exact component={WellBeingAdmin}/>
                <Route path="/sports/bingo" exact component={InputBingo}/>
                <Route path="/sports/christmasparty" exact component={InputChristmasParty}/>
                <Route path="/celebration" exact component={CelebrationDay}/>
                <Route path="/sports/celebrationday" exact component={InputCelebrationDay}/>
                <Route path="/charity" exact component={CharityContributions}/>
                <Route path="/christmas" exact component={ChristmasParty}/>
                <Route path="/news" exact component={News}/>
                <Route path="/wellbeing/Events"  exact component={WellBeingEvents}/>
                <Route path="/wellbeing/Keepfit"  exact component={WellbeingKeepFit}/>
                <Route path="/wellbeing/Healthfood"  exact component={WellbeingHealthFood}/>
                <Route path="/wellbeing/Charity"  exact component={WellBeingCharity}/>
                <Route path="/wellbeing/Healthatwork"  exact component={WellBeingHealthAtWork}/>



                <Route path="/login" exact component={Login}/>
                <Route path="/messageboard" exact component={MessageBoard}/>
                <Route path="/manager" exact component={AsyncManager}/>

                <Route path="/feedback" exact component={AsyncFeedback}/>

            </Switch>
            </Layout>

          )
    }

 
export default Routes;