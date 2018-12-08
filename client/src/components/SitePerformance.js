import React, { Component } from 'react';
import HomeSliderSmall from './Home/Home_sliderSmall';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';
 import BarChart from './BarChart';

class SitePerformance extends Component {
    constructor(props) {
        super(props);
       this.state = {
           data:false,
           allData: [
            {"name" : "Jan",
            "amount" : 2.7},
            {"name": "Feb",
            "amount" : 12},
            {"name" : "March",
            "amount": 4},
            {"name": "April",
            "amount": 6 },
            {"name": "May",
            "amount": 7},
            {"name": "June",
            "amount": 8},
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
        ],
        data2:false,
        allData2: [
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
        ]
       }
    }

    changeState = () => {
        this.setState({
            data:!this.state.data
        }, () => {
            console.log(this.state.data, "the state of data boolean")
            this.changeData();
        })
        
      
    }

    changeState2 = () => {
        this.setState({
            data2:!this.state.data2
        }, () => {
            console.log(this.state.data2, "the state of data boolean")
            this.changeData2();
        })
        
      
    }
    componentDidUpdate(){
    }

    changeData = () => {
        if(this.state.data) {
            this.setState({allData:[
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
            "amount" : 4}
        ]}, () => console.log(this.state.allData))
    }
        else { 
            this.setState({allData: [
            {"name" : "Jan",
            "amount" : 2.7},
            {"name": "Feb",
            "amount" : 12},
            {"name" : "March",
            "amount": 4},
            {"name": "April",
            "amount": 6 },
            {"name": "May",
            "amount": 7},
            {"name": "June",
            "amount": 8},
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
        ]
    }, () => console.log(this.state.allData))
}}
changeData2 = () => {
    if(this.state.data2) {
        this.setState({allData2: [
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
        ]}, () => console.log(this.state.allData2))
}
    else { 
        this.setState({allData2: [
            {"name" : "My Work",
            "amount" : 54},
            {"name": "My Manager",
            "amount" : 34},
            {"name" : "Leadership",
            "amount": 78},
            {"name": "Pay",
            "amount": 37},
            {"name": "Resources",
            "amount": 87},
            {"name": "Inclusion",
            "amount": 54}
        ] 
}, () => console.log(this.state.allData2))
}}

      render(){
     
        
    return (

        

        <div>
              <div className="sportsItem">
        <h1  style={{backgroundColor:'gold'}}>LATEST SITE PERFORMANCE</h1>

           
         </div>
         <div className="flexPerformance">
         <div className="flexPerformanceInner">
                        <div className="perfTitle">Average Sickness Days Lost {this.state.data ? 2017 : 2018}</div>
            <BarChart height={500} width={600} color={"red"} data={this.state.allData} />

            <div className="perfViewBtn" onClick={() => this.changeState()}>{this.state.data ? "View 2018" : "View 2017" }</div>
        </div>
           <div className="flexPerformanceInner">

               <div className="perfTitle">Peg Results {this.state.data2 ? 2017 : 2018}</div>
            <BarChart height={500} width={600} color={"green"} data={this.state.allData2} />
            <div className="perfViewBtn" onClick={() => this.changeState2()}>{this.state.data2 ? "View 2018" : "View 2017" }</div>

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
 
export default connect(mapStateToProps, actions)(SitePerformance);