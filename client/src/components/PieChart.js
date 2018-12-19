import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';
 

class PieChart extends Component {
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
        this.drawPie(this.props.data);
        console.log(this.props.data, "pie data on mount")
    }

    componentDidUpdate(prevProps){
            console.log(this.props.data, "pie data on update")
        if(this.props.data !== prevProps.data){
            this.drawPie(this.props.data);
        }

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

drawPie = (data) => {
    const dims = { height:200,
                   width:200,
                   radius: 100 };

    const centre = { x:dims.width / 2 + 5,
                    y:dims.height / 2 + 5 };
                    
                    
    let u = d3.select(this.svgElememt)
        .attr('width', dims.width + 100)
        .attr('height', dims.height + 50);

    const graph = d3.select(this.grElement)
        .attr('transform', `translate(${centre.x + 50}, ${centre.y})`);

  
    const pie = d3.pie()
        .sort(null)
        .value(d => d.amount);

    const arcPath =  d3.arc()
        .outerRadius(dims.radius)
        .innerRadius(dims.radius / 4);

    const colour = d3.scaleOrdinal(d3['schemeSet3'])

        
    const arcTweenEnter = (d) => {
        var i = d3.interpolate(d.endAngle, d.startAngle);
        return function(t) {
            d.startAngle = i(t)
         return arcPath(d)
        }
    }

    const arcTweenExit = (d) => {
        var i = d3.interpolate(d.startAngle, d.endAngle);
        return function(t) {
            d.startAngle = i(t)
         return arcPath(d)
        }
    }

        colour.domain(data.map(d => d.name))

        const paths = graph.selectAll('path')
            .data(pie(data));

    paths.exit()
        .transition().duration(750)
        .attrTween('d', arcTweenExit)
        .remove();
    
    paths.attr('class', 'arc')
    .attr('stroke', 'white')
    .attr('fill', d => colour(d.data.name))
    .attr('stroke-width', 3)
    .on('mouseover', (d => this.showMessage(d.data.name, d.data.desc, d.data.amount)))
    .transition().duration(2000)
    .attrTween("d", arcTweenEnter);
    

    paths.enter()
        .append('path')
        .attr('class', 'arc')
        .attr('stroke', 'white')
        .attr('fill', d => colour(d.data.name))   
        .attr('stroke-width', 3)
        .on('mouseover', (d => this.showMessage(d.data.name, d.data.desc)))
        .transition().duration(2000)
        .attrTween("d", arcTweenEnter);
        
}


render(){
          
    return (

        

        <div>
                   
            <div className="dynamicCharts">
            <svg ref={element => this.svgElememt = element}>
                <g ref={element => this.grElement = element}>
                   </g>
                <g ref={element => this.gr2Element = element}></g>
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
 
export default connect(mapStateToProps, actions)(PieChart);