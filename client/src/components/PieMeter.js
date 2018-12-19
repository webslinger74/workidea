import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';
 

class PieMeter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMessage:false,
            description:'',
            name:'',
            amount:''
        }
    }


    componentDidMount(){
        this.drawPie();
        
    }

    componentDidUpdate(prevProps){
         //   console.log(this.props.data, "pie data on update")
         //   this.drawPie();
        }

    showMessage = (name, desc, amount) => {
        console.log(name, "the name of path", desc, "description");
        this.setState({
            showMessage:true,
            description:desc,
            name,
            amount
        })
    }

drawPie = () => {
                
    ///////
    const  percent = .95;
 // 0.0 to 1.0
    const textNorm = percent * 100;
    const text = (percent * 100) + "%";
    const thickness = 30;
    const width = 260;
    const height = 260;
    const duration = 3500;
    const foregroundColor = "#0a8";
    const backgroundColor = "#ccc";

 const radius = Math.min(width, height) / 2;
 const color = d3.scaleOrdinal([foregroundColor, backgroundColor]);
                    
    let u = d3.select(this.svgElememt)
        .attr('class', 'pie')
        .attr('width', 260)
        .attr('height', 260)

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
            <div className="catMessage" style={{textAlign:'center'}}>{this.state.showMessage ?
                                (
                                    <div>
                                 <div  style={{fontSize:'14px', fontWeight:'bold', paddingBottom:'2px'}}>Category - {this.state.name} </div>
                                 <div  style={{fontSize:'10px', paddingBottom:'2px'}}>Top Issue - {this.state.description} </div>
                                 <div  style={{fontSize:'10px', paddingBottom:'2px'}}>Absences - {this.state.amount} </div>
                                    </div>
                                ) 
                                 
                                 : null}
                </div>
         
          
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