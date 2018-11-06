import React, { Component } from 'react';
import HomeSlider from './Home/Home_Slider';
import LatestMessage from './LatestMessage';
import Guidance from './Updates';
import LatestWellbeing from './LatestWellbeing';
import LatestSports from './LatestSports';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
    
                <HomeSlider />
                <div className="frontMessages">
                <LatestMessage />
                <div className="verticalLine"></div>
                <LatestWellbeing />
                </div>
                <div className="frontMessages">
                 <div className="verticalLine"></div>
                    <div><LatestSports /></div>
                    <div className="verticalLine"></div>
                </div>
            </div>
          );
    }
}
 
export default Home;