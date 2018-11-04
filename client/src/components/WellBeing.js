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
        <div id="sportsHeader">HEALTH & WELLBEING</div>
           <div id="sportsLinks">
            <Link className="indSportsLinks" to="/"><h2>Events</h2></Link>
            <Link className="indSportsLinks" to="/"><h2>Keep Fit & Stay Fit</h2></Link>
            <Link className="indSportsLinks" to="/"><h2>Healthy Food</h2></Link>
            <Link className="indSportsLinks" to="/"><h2>News</h2></Link>
            <Link className="indSportsLinks" to="/"><h2>Contact Us</h2></Link>
            <Link className="indSportsLinks" to="/"><h2>Charity</h2></Link>
            <Link className="indSportsLinks" to="/"><h2>Health At Work</h2></Link>
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
