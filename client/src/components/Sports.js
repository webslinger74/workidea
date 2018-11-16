import React, { Component } from 'react';
import HomeSliderSmall from './Home/Home_sliderSmall';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Sports extends Component {
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
        <div id="sportsHeader">SPORTS & SOCIAL</div>
           <div id="sportsLinks">
            <Link className="indSportsLinks" to="/events"><h2>Events</h2></Link>
            <Link className="indSportsLinks" to="/bingo"><h2>Bingo Numbers</h2></Link>
            <Link className="indSportsLinks" to="/charity"><h2>Charity Contributions</h2></Link>
            <Link className="indSportsLinks" to="/news"><h2>News</h2></Link>
            <Link className="indSportsLinks" to="/christmas"><h2>Christmas Party</h2></Link>
            <Link className="indSportsLinks" to="/celebration"><h2>Celebration Day</h2></Link>
            <Link className="indSportsLinks" to="/sports/contacts"><h2>Contact Us</h2></Link>
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
 
export default connect(mapStateToProps, actions)(Sports);