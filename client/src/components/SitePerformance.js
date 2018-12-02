import React, { Component } from 'react';
import HomeSliderSmall from './Home/Home_sliderSmall';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';

class SitePerformance extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

    }

    componentDidMount(){
        this.drawChart();
    }

    componentDidUpdate(){
        this.drawChart();
    }
    
    drawChart = () => {
        const data =[120,50,60,70,40,34];
        const svg = d3.select('#barChart').append("svg").attr("width", 700).attr("height", 300).attr("fill", "red");
        svg.selectAll("rect").data(data).enter().append("rect").attr("x", (d,i) => i * 70).attr("y", 0).attr("width", 25).attr("height", (d,i) => d).attr("fill", "green");

    }


      render(){

    return (

        

        <div>
            <div id="barChart"></div>
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