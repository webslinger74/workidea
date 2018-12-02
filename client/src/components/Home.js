import React, { Component } from 'react';
import HomeSlider from './Home/Home_Slider';
import LatestMessage from './LatestMessage';
import Guidance from './Updates';
import LatestWellbeing from './LatestWellbeing';
import LatestSports from './LatestSports';
import LatestSitePerformance from './LatestSitePerformance';
import LatestGuidance from './LatestGuidance';
import LatestPegNews from './LatestPegNews';
import HomeSlider2 from './Home/Home_Slider.2';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

        
    }
    render() { 
        return (
            <div>
                <div className="mainBackground">
                <HomeSlider />
                <div className="frontMessages newsWellFull">
                <LatestMessage />
                <div className="verticalLine"></div>
                <LatestWellbeing />
                </div>
                <div>
                <HomeSlider2 />
                </div>
                <div className="frontMessages sportFull">
                 <div className="verticalLine"></div>
                    <div><LatestSports /></div>
                    <div className="verticalLine"></div>
                </div>
                <div className="frontMessages2 guidanceFull">
                 <div className="verticalLine"></div>
                    <div><LatestGuidance /></div>
                    <div className="verticalLine"></div>
                </div>   

                <div className="frontMessages engagedFull">
                 <div className="verticalLine"></div>
                    <div><LatestPegNews /></div>
                    <div className="verticalLine"></div>
                </div>
                <div className="frontMessages">
                 <div className="verticalLine"></div>
                    <div><LatestSitePerformance /></div>
                    <div className="verticalLine"></div>
                
                </div>
                </div>
            </div>
          );
    }
}
 
export default Home;