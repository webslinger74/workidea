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

    y = d3.scaleLinear().domain([0,6000]).range([0,600]);

    drawChart = () => {
        const data =[1200,500,6000,2000,1005,340];
        const svg = d3.select ('#barChart').append("svg").attr("width", 700).attr("height", 300);
        svg.selectAll("rect").data(data)
                .enter().append("rect")
                .attr("x", (d,i) => 300 + (i * 70))
                .attr("y", 50)
                .attr("width", 25)
                .attr("height", (d,i) => this.y(d))
                .attr("fill", "blue");

        


    }


      render(){
            console.log(this.y(5004));
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