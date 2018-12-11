import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';
 

class PieChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    componentDidMount(){
        this.drawPie(this.props.data);
        console.log(this.props.data, "pie data on mount")
    }

    componentDidUpdate(prevProps){
            console.log(this.props.data, "pie data on update")
        if(this.props.data !== prevProps.data){
            this.drawPie(this.props.data);
        }

    }

drawPie = (data) => {
    const dims = { height:300,
                   width:300,
                   radius: 150 };

    const centre = { x:dims.width / 2 + 5,
                    y:dims.height / 2 +5 };
                    
                    
    let u = d3.select(this.svgElememt)
        .attr('width', dims.width + 150)
        .attr('height', dims.height + 50);

    const graph = d3.select(this.grElement)
        .attr('transform', `translate(${centre.x + 100}, ${centre.y})`);


    

    const pie = d3.pie()
        .sort(null)
        .value(d => d.amount);

    const arcPath =  d3.arc()
        .outerRadius(dims.radius)
        .innerRadius(dims.radius / 16);

    const colour = d3.scaleOrdinal(d3['schemeSet3'])



        colour.domain(data.map(d => d.name))

        const paths = graph.selectAll('path')
            .data(pie(data));

    paths.exit().remove();
    
    paths.attr('class', 'arc')
    .attr('stroke', 'white')
    .attr('fill', d => colour(d.data.name))
    .attr('stroke-width', 3)
    .transition().duration(3000)
    .attr("d", arcPath);

    paths.enter()
        .append('path')
        .attr('class', 'arc')
        .attr('stroke', 'white')
        .attr('fill', d => colour(d.data.name))   
        .attr('stroke-width', 3)
        .transition().duration(3000)
        .attr("d", arcPath);
        
}


render(){
          
    return (

        

        <div>
                   
            <div className="dynamicPieCharts">
            <svg ref={element => this.svgElememt = element}>
                <g ref={element => this.grElement = element}>
                
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
 
export default connect(mapStateToProps, actions)(PieChart);