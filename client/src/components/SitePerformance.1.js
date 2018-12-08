import React, { Component } from 'react';
import HomeSliderSmall from './Home/Home_sliderSmall';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';
 

class SitePerformance extends Component {
    constructor(props) {
        super(props);

    }


    componentDidMount(){
        this.drawChart();

        
        this.drawChart2( [
            {"name" : "My Work",
            "amount" : 71},
            {"name": "My Manager",
            "amount" : 54},
            {"name" : "Leadership",
            "amount": 33},
            {"name": "Pay",
            "amount": 92 },
            {"name": "Resources",
            "amount": 65},
            {"name": "Inclusion",
            "amount": 45}
        ])

        
        this.drawPie();
    }

    componentDidUpdate(){
    }


    drawChart = () => {

       
        const data = [
            {"name" : "Jan",
            "amount" : 7.4},
            {"name": "Feb",
            "amount" : 12.2},
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

        const max = d3.max(data, d => d.amount);

        const margin = {
            top:20, right:20, bottom:100, left:100
        }

        const graphWidth = 600 - margin.right - margin.left;
        const graphHeight = 500 - margin.top - margin.bottom;


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

         /* Initialize tooltip */
           const tip = d3Tip().attr('class', 'd3-tip').html(function(d) { return d.amount; });
 
        
            //rects already in DOM
        const rects = graph.selectAll('rect')
            .data(data);

        console.log(rects, "the rects");
        
           rects.attr("fill", "blue")
            .attr('class', "bars")
            .attr("x", d => x(d.name))
            .attr("y", graphHeight)
            .attr("height", 0)
            .attr("width", x.bandwidth)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)     
            .transition().duration(4000)
            .attr("height", d => graphHeight - y(d.amount))
            .attr("y", d => y(d.amount));

      /* Invoke the tip in the context of your visualization */
      rects.call(tip)

//enter selection////////////////

        rects.exit().remove();

        rects.enter()
        .append('rect')
                .attr("fill", "blue")
                .attr('class', "bars")
                .attr("x", d => x(d.name))
                .attr("y", graphHeight)
                .attr("height", 0)
                .attr("width", x.bandwidth)
                .on('mouseover', tip.show)
                .on('mouseout', tip.hide)     
                .transition().duration(4000)
                  .attr("height", d => graphHeight - y(d.amount))
                  .attr("y", d => y(d.amount));

                 
    }

    updateChart = (data) => {
        const max = d3.max(data, d => d.amount);
        const margin = {
            top:20, right:20, bottom:100, left:100
        }
        const graphHeight = 500 - margin.top - margin.bottom;
        
        const y = d3.scaleLinear()
            .domain([0,max])
            .range([graphHeight,0]);

        const x = d3.scaleBand()
            .domain(data.map(item => item.name))
            .range([0,500])
            .paddingInner(0.2)
            .paddingOuter(0.2);

       
            const rects = graph.selectAll('rect')
            .data(data);

        console.log(rects, "the rects");
        
           rects.attr("fill", "blue")
            .attr('class', "bars")
            .attr("x", d => x(d.name))
            .attr("y", graphHeight)
            .attr("height", 0)
            .attr("width", x.bandwidth)
            .on('mouseover', tip.show)
            .on('mouseout', tip.hide)     
            .transition().duration(4000)
            .attr("height", d => graphHeight - y(d.amount))
            .attr("y", d => y(d.amount));

      /* Invoke the tip in the context of your visualization */
//      rects.call(tip)

//enter selection////////////////

        rects.exit().remove();

        rects.enter()
        .append('rect')
                .attr("fill", "blue")
                .attr('class', "bars")
                .attr("x", d => x(d.name))
                .attr("y", graphHeight)
                .attr("height", 0)
                .attr("width", x.bandwidth)
                .on('mouseover', tip.show)
                .on('mouseout', tip.hide)     
                .transition().duration(4000)
                  .attr("height", d => graphHeight - y(d.amount))
                  .attr("y", d => y(d.amount));

                 
    }

    

//////////////////////////////////////////////////////////////////////


    drawChart2 = (data) => {
        
       
        const min = d3.min(data, d => d.amount);
        const max = d3.max(data, d => d.amount);
        const extent = d3.extent(data, d => data.amount);
        console.log(max);

        const margin = {
            top:20, right:20, bottom:100, left:100
        }

        const graphWidth = 600 - margin.right - margin.left;
        const graphHeight = 500 - margin.top - margin.bottom;


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



           const tip = d3Tip().attr('class', 'd3-tip').html(function(d) { return d.amount; });
 
        /* Invoke the tip in the context of your visualization */

        
            graph.call(tip)
 
  
   
        graph.selectAll("rect").data(data)
                .enter().append("rect")
                .attr("fill", "green")
                .attr("class", "bars2")
                .attr("x", d => x(d.name))
                .attr("y", graphHeight)
                .attr("height", 0)
                .attr("width", x.bandwidth)
                .on('mouseover', tip.show)
                .on('mouseout', tip.hide)     
                .transition().duration(4000)
                  .attr("height", d => graphHeight - y(d.amount))
                  .attr("y", d => y(d.amount));
    }


    ////////////////////////pie chart attempt////////////////////////////////////////////////////////////////

    drawPie = () => {
            const dims = { height:300,
                           width:300,
                           radius: 150 };

            const centre = { x:dims.width / 2 + 5,
                            y:dims.height / 2 +5 };

            const svg = d3.select('#pie')
                .append('svg')
                .attr('width', dims.width + 150)
                .attr('height', dims.height + 150);

            const graph = svg.append('g')
                .attr('transform', `translate(${centre.x}, ${centre.y})`);


            

            const pie = d3.pie()
                .sort(null)
                .value(d => d.amount);

            const angles = [   {"name" : "Mental Illness",
            "amount" : 71},
            {"name": "Cough & Colds",
            "amount" : 54},
            {"name" : "Stomach bugs",
            "amount": 33},
            {"name": "Physical",
            "amount": 92 },
            {"name": "Bereavement",
            "amount": 65},
            {"name": "Cancer",
            "amount": 45}

            ];


            const arcPath =  d3.arc()
                .outerRadius(dims.radius)
                .innerRadius(dims.radius / 4);

            const colour = d3.scaleOrdinal(d3['schemeSet3'])

            const update = (data) => {

                colour.domain(data.map(d => d.name))

                const paths = graph.selectAll('path')
                    .data(pie(data));




            paths.enter()
                .append('path')
                .attr('class', 'arc')
                .attr('d', arcPath)
                .attr('stroke', 'black')
                .attr('fill', d => colour(d.data.name))   
                .attr('stroke-width', 1);
                
                    



                
            }
            update(angles);
           


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
            <div onClick={() => this.updateChart( [
            {"name" : "Jan",
            "amount" : 1.4},
            {"name": "Feb",
            "amount" : 1.2},
            {"name" : "March",
            "amount": 2.6},
            {"name": "April",
            "amount": 7.7 },
            {"name": "May",
            "amount": 4.2},
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
        ])}>click for update</div>
            </div>
            <div id="pie" style={{textAlign:"center", fontWeight:"bold"}}>Absence by Category</div>
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