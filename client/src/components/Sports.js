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
            <Link className="indSportsLinks" to="/events">EVENTS</Link>
            <Link className="indSportsLinks" to="/bingo">BINGO NUMBERS</Link>
            <Link className="indSportsLinks" to="/charity">CHARITY CONTRIBUTIONS</Link>
            <Link className="indSportsLinks" to="/news">NEWS</Link>
            <Link className="indSportsLinks" to="/christmas">CHRISTMAS PARTY</Link>
            <Link className="indSportsLinks" to="/celebration">CELEBRATION DAY</Link>
            <Link className="indSportsLinks" to="/sports/contacts">CONTACT US</Link>
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