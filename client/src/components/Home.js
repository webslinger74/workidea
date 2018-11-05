import React, { Component } from 'react';
import HomeSlider from './Home/Home_Slider';
import LatestMessage from './LatestMessage';
import Guidance from './Updates';
import LatestWellbeing from './LatestWellbeing';

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
            </div>
          );
    }
}
 
export default Home;