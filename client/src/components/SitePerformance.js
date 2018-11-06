import React, { Component } from 'react';
import HomeSliderSmall from './Home/Home_sliderSmall';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SitePerformance extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

      render(){

    return (

        <div>
        
        <div id="sportsHeader">SITE PERFORMANCE</div>
         
                          
        <div className="dividers2"></div>
        <div className="performanceGrid">
            



        </div>
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

})
 
export default connect(mapStateToProps, actions)(SitePerformance);