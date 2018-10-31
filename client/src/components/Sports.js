import React from 'react';
import HomeSliderSmall from './Home/Home_sliderSmall';

const Sports = () => {
    return (

        <div>
            <div id="sliderSmall">
        <HomeSliderSmall/>
        </div>
        <div id="sportsHeader">Sports AND Social</div>
        
        <div className="dividers2"></div>
        <div className="sportsItem">PayDay Bingo</div>
        <div className="sportsItem">Latest Events</div>
        <div className="sportsItem">Charitable Contributions</div>
        <div className="sportsItem">News</div>
        <div className="sportsItem">Contact Us</div>
        </div>
      );
}
 
export default Sports;