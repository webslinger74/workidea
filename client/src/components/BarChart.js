import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';
 

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    componentDidMount(){
        this.drawChart();
    }

    componentDidUpdate(prevProps){
        if(this.props.data !== prevProps.data){
            this.drawChart();
        }

    }

    drawChart = () => {

       
        const data = this.props.data;

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

       

      //  const svg = d3.select ('#barChart').append("svg").attr("width", 700).attr("height", 600);

        let u = d3.select(this.svgElememt)
        
        let gr = d3.select(this.grElement)
        
            gr.attr('width', graphWidth)
            .attr('height', graphHeight)
            .attr('transform', `translate(${margin.left}, ${margin.top})`)


        let grX = d3.select(this.grXElement);
        let grY = d3.select(this.grYElement);

        const xAxisGroup = grX
                .attr('transform', `translate(0, ${graphHeight})`);
        const yAxisGroup = grY;
                
        

        const xAxis = d3.axisBottom(x);
        const yAxis = d3.axisLeft(y);

        xAxisGroup.call(xAxis);
        yAxisGroup.call(yAxis);

        //up to here is controlled by React then kicks in the D3 parts

         
            //rects already in DOM
        const rects = gr.selectAll('rect')
            .data(data);


          /* Initialize tooltip */
       const tip = d3Tip().attr('class', 'd3-tip').html(function(d) { return d.amount; });
       /* Invoke the tip in the context of your visualization */
             rects.call(tip)   
      

            rects.exit().remove();
        
           rects.attr("fill", this.props.color)
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
        rects.enter()
        .append('rect')
                .attr("fill", this.props.color)
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
      
          
    }

      render(){
          
    return (

        

        <div>
                   
            <div className="dynamicCharts">
            <svg width={this.props.width} height={this.props.height} ref={element => this.svgElememt = element}>
                <g ref={element => this.grElement = element}>
                <g ref={element => this.grXElement = element}></g>
                <g ref={element => this.grYElement = element}></g>
                
                </g>
            </svg>
          
            </div>
         
            

       </div>
    
      
      )
    }
}



const actions = {
}

const mapStateToProps = (state) => ({

})
 
export default connect(mapStateToProps, actions)(BarChart);