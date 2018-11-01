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
        <div className="sportsItem" id="bingocard">PayDay Bingo
                   
                   <div className="cont">
                    <div id="bingoCardInner"> 18     
                    </div>
                    <div id="bingoCardInner">44
                    </div>
                    <div id="bingoCardInner">65
                     </div>
                    <div id="bingoCardInner">38
                     </div>
                    <div id="bingoCardInner">87
                     </div>
        </div>
        
        </div>
        <div className="dividers2"></div>
        <div className="sportsItem">Latest Events</div>
        <div className="dividers2"></div>
        <div className="sportsItem">Charitable Contributions</div>
        <div className="dividers2"></div>
        <div className="sportsItem">News</div>
        <div className="dividers2"></div>
        <div className="sportsItem">Contact Us</div>
        </div>
      );
}
 
export default Sports;