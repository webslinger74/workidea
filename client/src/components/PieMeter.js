import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';
 

class PieMeter extends Component {
    constructor(props) {
        super(props);
        this.state = {
                    }
    }


    componentDidMount(){
        this.drawPie(this.props.amount);
    }

 
drawPie = (amount) => {

    ///////
    const  percent = amount / 100;
 // 0.0 to 1.0
    const textNorm = amount;
    const text = (percent * 100) + "%";
    const thickness = 20;
    const width = 180;
    const height = 180;
    const duration = 3500;
    const foregroundColor = "#0a8";
    const backgroundColor = "#ccc";

 const radius = Math.min(width, height) / 2;
 const color = d3.scaleOrdinal([foregroundColor, backgroundColor]);
                    
    let u = d3.select(this.svgElememt)
        .attr('class', 'pie')
        .attr('width', 180)
        .attr('height', 180)

    const graph = d3.select(this.grElement)
        .attr('transform', 'translate(' + (width/2) + ',' + (height/2) + ')');
    
    
    const arc = d3.arc()
    .innerRadius(radius - thickness)
    .outerRadius(radius);
    
    const pie = d3.pie()
    .sort(null);

    const path = graph.selectAll('path')
    .data(pie([0, 1]))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d, i) {
      return color(i);
    })
    .each(function(d) { this._current = d; });
    
    
    path.data(pie([percent, 1-percent])).transition()
      .duration(duration)
      .attrTween('d', function(d) {
      var interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function(t) {
        return arc(interpolate(t));
      }
    });

        const textInner = graph.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '.45')
        .attr('transform', 'translate(' + 0 + ',' + 25 + ')')
        .text(1)

        textInner.transition()
        .tween("text", function(){

            var selection = d3.select(this);
            var start = d3.select(this).text();
            var end = textNorm;    
            var interpolator = d3.interpolateNumber(start, end);
                return  function(t){
                    selection.text(Math.round(interpolator(t)));
                }
            })
            .duration(4000);
        }

render(){
          
    return (

        

        <div>
                   
            <div className="dynamicCharts">
            <svg ref={element => this.svgElememt = element}>
                <g style={{fontSize:'60px', fontWeight:'bold' , fill:'green'}}ref={element => this.grElement = element}>
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
 
export default connect(mapStateToProps, actions)(PieMeter);