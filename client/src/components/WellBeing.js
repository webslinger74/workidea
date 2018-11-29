import React, { Component } from 'react';
import HomeSliderSmall from './Home/Home_sliderSmall';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class WellBeing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

      render(){

    return (

        <div>
            <div id="sliderSmall">
        <HomeSliderSmall/>
        </div>
           <div id="sportsLinks">
            <Link className="indSportsLinks" to="/wellbeing/Events">Events</Link>
            <Link className="indSportsLinks" to="/wellbeing/Keepfit">Keep Fit & Stay Fit</Link>
            <Link className="indSportsLinks" to="/wellbeing/Healthfood">Healthy Food</Link>
            <Link className="indSportsLinks" to="/">News</Link>
            <Link className="indSportsLinks" to="/">Contact Us</Link>
            <Link className="indSportsLinks" to="/wellbeing/Charity">Charity</Link>
            <Link className="indSportsLinks" to="/wellbeing/Healthatwork">Health At Work</Link>
                </div>                
        <div className="dividers2"></div>
        <div className="sportsItem">

        {this.props.children}
        </div>
      </div>
      
      )
    }
}

const actions = {
}

const mapStateToProps = (state) => ({
    bingo:state.sports.bingoNumbers,
    events:state.sports.events
})
 
export default connect(mapStateToProps, actions)(WellBeing);
