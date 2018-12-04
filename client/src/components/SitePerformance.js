import React, { Component } from 'react';
import HomeSliderSmall from './Home/Home_sliderSmall';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';
import { blob } from 'd3-fetch';

class SitePerformance extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

    }

    componentDidMount(){
        this.drawChart();
        this.drawChart2();
    }

    componentDidUpdate(){
    
    }


    drawChart = () => {
        const data = [
            {"name" : "Jan",
            "amount" : 7.4},
            {"name": "Feb",
            "amount" : 8.2},
            {"name" : "March",
            "amount": 4.6},
            {"name": "April",
            "amount": 6.7 },
            {"name": "May",
            "amount": 7.2},
            {"name": "June",
            "amount": 5.8},
            {"name": "July",
            "amount" : 3.9},
            {"name": "August",
            "amount" : 8.3},
            {"name": "Sept",
            "amount" : 7.4},
            {"name": "Oct",
            "amount" : 6.9},
            {"name": "Nov",
            "amount" : 5.4},
            {"name": "Dec",
            "amount" : 0}
        ];
        const min = d3.min(data, d => d.amount);
        const max = d3.max(data, d => d.amount);
        const extent = d3.extent(data, d => data.amount);
        console.log(max);

        const margin = {
            top:20, right:20, bottom:100, left:100
        }

        const graphWidth = 700 - margin.right - margin.left;
        const graphHeight = 600 - margin.top - margin.bottom;


        const y = d3.scaleLinear()
            .domain([0,max])
            .range([graphHeight,0]);

        const x = d3.scaleBand()
            .domain(data.map(item => item.name))
            .range([0,500])
            .paddingInner(0.2)
            .paddingOuter(0.2);

       

        const svg = d3.select ('#barChart').append("svg").attr("width", 700).attr("height", 600);


       

        const graph = svg.append('g')
            .attr('width', graphWidth)
            .attr('height', graphHeight)
            .attr('transform', `translate(${margin.left}, ${margin.top})`)

        const xAxisGroup = graph.append('g')
                .attr('transform', `translate(0, ${graphHeight})`);
        const yAxisGroup = graph.append('g');
                


        const xAxis = d3.axisBottom(x);
        const yAxis = d3.axisLeft(y);

        xAxisGroup.call(xAxis);
        yAxisGroup.call(yAxis);
   
        graph.selectAll("rect").data(data)
                .enter().append("rect")
                .attr("fill", "blue")
                .attr("x", d => x(d.name))
                .attr("y", graphHeight)
                .attr("height", 0)
                .attr("width", x.bandwidth)
                .transition().duration(4000)
                  .attr("height", d => graphHeight - y(d.amount))
                  .attr("y", d => y(d.amount));
    }

    drawChart2 = () => {
        const data = [
            {"name" : "My Work",
            "amount" : 71},
            {"name": "My Manager",
            "amount" : 54},
            {"name" : "Leadership",
            "amount": 33},
            {"name": "Pay",
            "amount": 76 },
            {"name": "Resources",
            "amount": 65},
            {"name": "Inclusion",
            "amount": 45}
        ];
        const min = d3.min(data, d => d.amount);
        const max = d3.max(data, d => d.amount);
        const extent = d3.extent(data, d => data.amount);
        console.log(max);

        const margin = {
            top:20, right:20, bottom:100, left:100
        }

        const graphWidth = 700 - margin.right - margin.left;
        const graphHeight = 600 - margin.top - margin.bottom;


        const y = d3.scaleLinear()
            .domain([0,max])
            .range([graphHeight,0]);

        const x = d3.scaleBand()
            .domain(data.map(item => item.name))
            .range([0,500])
            .paddingInner(0.2)
            .paddingOuter(0.2);

       

        const svg = d3.select ('#barChart2').append("svg").attr("width", 700).attr("height", 600);


       

        const graph = svg.append('g')
            .attr('width', graphWidth)
            .attr('height', graphHeight)
            .attr('transform', `translate(${margin.left}, ${margin.top})`)

        const xAxisGroup = graph.append('g')
                .attr('transform', `translate(0, ${graphHeight})`);
        const yAxisGroup = graph.append('g');
                


        const xAxis = d3.axisBottom(x);
        const yAxis = d3.axisLeft(y);

        xAxisGroup.call(xAxis);
        yAxisGroup.call(yAxis);
   
        graph.selectAll("rect").data(data)
                .enter().append("rect")
                .attr("fill", "green")
                .attr("x", d => x(d.name))
                .attr("y", graphHeight)
                .attr("height", 0)
                .attr("width", x.bandwidth)
                .transition().duration(4000)
                  .attr("height", d => graphHeight - y(d.amount))
                  .attr("y", d => y(d.amount));
    }




      render(){
    
    return (

        

        <div>
              <div className="sportsItem">
        <h1  style={{backgroundColor:'gold'}}>LATEST SITE PERFORMANCE</h1>

           
         </div>
         
       
            <div className="dynamicCharts">
            <div id="barChart" style={{textAlign:"center", fontWeight:"bold"}}>Average Days Lost</div>
            <div id="barChart2" style={{textAlign:"center", fontWeight:"bold"}}>PEG Results 2018</div>
            </div>
            <div className="dividers2"></div>
       
       </div>
    
      
      )
    }
}



const actions = {
}

const mapStateToProps = (state) => ({

})
 
export default connect(mapStateToProps, actions)(SitePerformance);