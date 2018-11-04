import React, { Component } from 'react';
import HomeSlider from './Home/Home_Slider';
import LatestMessage from './LatestMessage';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
    
                <HomeSlider />
                <LatestMessage />
             
            </div>
          );
    }
}
 
export default Home;