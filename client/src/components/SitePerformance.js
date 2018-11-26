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
        
        <div className="sportsItem">
        <h1  style={{backgroundColor:'gold'}}>LATEST SITE PERFORMANCE</h1>
           
            <p>KEEP POSTED FOR LATEST PERFORMANCE METRICS</p>  
         
        
        <div className="dividers2"></div>
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