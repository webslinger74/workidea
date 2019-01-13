import React, { Component } from 'react';
import PieMeter from './PieMeter';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';
 import BarChart from './BarChart';
 import PieChart from './PieChart';

class SitePerformance extends Component {
    constructor(props) {
        super(props);
       this.state = {
           data1:false,
           allData1: [
            {"name" : "Jan",
            "amount" : 2.7},
            {"name": "Feb",
            "amount" : 12},
            {"name" : "Mar",
            "amount": 4},
            {"name": "Apr",
            "amount": 6 },
            {"name": "May",
            "amount": 7},
            {"name": "Jun",
            "amount": 8},
            {"name": "Jul",
            "amount" : 3.9},
            {"name": "Aug",
            "amount" : 8.3},
            {"name": "Sep",
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
            {"name" : "Work",
            "amount" : 71},
            {"name": "Manager",
            "amount" : 54},
            {"name" : "Leadership",
            "amount": 33},
            {"name": "Pay",
            "amount": 92 },
            {"name": "Resources",
            "amount": 65},
            {"name": "Inclusion",
            "amount": 45}
        ],
            data3:false,
            allData3:[{"name" : "Mental Illness", "amount" : 71,"desc": "Dementia"},
            {"name": "Cough & Colds","amount" : 50,"desc": "Coughs"},
            {"name" : "Stomach bugs","amount": 33,"desc": "Stomach Bug"},
            {"name": "Physical", "amount": 92,"desc": "Break Foot"} ,
            {"name": "Bereavement", "amount": 65,"desc": "Death of Parent"},
            {"name": "Cancer", "amount": 45,"desc": "Lung Cancer"} ]
       }
    }

    changeState = () => {
        this.setState({
            data1:!this.state.data1
        }, () => {
         //   console.log(this.state.data1, "the state of data boolean")
            this.changeData();
        })
        
      
    }

    changeState2 = () => {
        this.setState({
            data2:!this.state.data2
        }, () => {
         //   console.log(this.state.data2, "the state of data boolean")
            this.changeData2();
        })
        
      
    }

    changeState3 = () => {
        this.setState({
            data3:!this.state.data3
        }, () => {
          //  console.log(this.state.data3, "the state of data boolean")
            this.changeData3();
        })
        
      
    }
    componentDidUpdate(){
    }

    changeData = () => {
        if(this.state.data1) {
            this.setState({allData1:[
            {"name" : "Jan",
            "amount" : 7.4},
            {"name": "Feb",
            "amount" : 12.2},
            {"name" : "Mar",
            "amount": 4.6},
            {"name": "Apr",
            "amount": 6.7 },
            {"name": "May",
            "amount": 7.2},
            {"name": "Jun",
            "amount": 5.8},
            {"name": "Jul",
            "amount" : 3.9},
            {"name": "Aug",
            "amount" : 8.3},
            {"name": "Sep",
            "amount" : 7.4},
            {"name": "Oct",
            "amount" : 6.9},
            {"name": "Nov",
            "amount" : 5.4},
            {"name": "Dec",
            "amount" : 4}
        ]}, () => console.log(this.state.allData1))
    }
        else { 
            this.setState({allData1: [
            {"name" : "Jan",
            "amount" : 2.7},
            {"name": "Feb",
            "amount" : 12},
            {"name" : "Mar",
            "amount": 4},
            {"name": "Apr",
            "amount": 6 },
            {"name": "May",
            "amount": 7},
            {"name": "Jun",
            "amount": 8},
            {"name": "Jul",
            "amount" : 3.9},
            {"name": "Aug",
            "amount" : 8.3},
            {"name": "Sep",
            "amount" : 7.4},
            {"name": "Oct",
            "amount" : 6.9},
            {"name": "Nov",
            "amount" : 5.4},
            {"name": "Dec",
            "amount" : 0}
        ]
    }, () => console.log(this.state.allData1))
}}
changeData2 = () => {
    if(this.state.data2) {
        this.setState({allData2: [
            {"name" : "Work",
            "amount" : 71},
            {"name": "Manager",
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
            {"name" : "Work",
            "amount" : 54},
            {"name": "Manager",
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
changeData3 = () => {
    if(this.state.data3) {
        this.setState({allData3:  [{"name" : "Mental Illness", "amount" : 62,"desc": "Dementia"},
        {"name": "Cough & Colds","amount" : 33,"desc":"Cough" },
        {"name" : "Stomach bugs","amount": 56,"desc": "Stomach Bugs"},
        {"name": "Physical", "amount": 76,"desc": "Broken Leg"},
        {"name": "Bereavement", "amount": 43,"desc":"Death" },
        {"name": "Cancer", "amount": 28, "desc":  "Cancer"} ]})
}
    else { 
        this.setState({allData3: [{"name" : "Mental Illness", "amount" : 76, "desc": "OCD"},
        {"name": "Cough & Colds","amount" : 65,"desc": "Influenza"},
        {"name" : "Stomach bugs","amount": 45, "desc": "Food Poisoning"},
        {"name": "Physical", "amount": 87, "desc": "Broken Arm"},
        {"name": "Bereavement", "amount": 22, "desc": "Death of Family Member"},
        {"name": "Cancer", "amount": 65, "desc": "Lung Cancer"} ]
}, () => console.log(this.state.allData3))
}}

      render(){
     
        
    return (

        

        <div className="sitePerformanceBackground">
    
              <div className="sitePerformanceItem">
        LATEST SITE PERFORMANCE

           
         </div>
         <div className="flexPerformance">
         <div className="flexPerformanceInner">
                        <div className="perfTitle"> Sickness Levels {this.state.data1 ? 2017 : 2018}</div>
            <BarChart height={300} width={400} color={"red"} data={this.state.allData1} />

            <div className="perfViewBtn" onClick={() => this.changeState()}>{this.state.data1 ? "View 2018" : "View 2017" }</div>
        </div>
           <div className="flexPerformanceInner">

               <div className="perfTitle">Engagement Results {this.state.data2 ? 2017 : 2018}</div>
            <BarChart height={300} width={400} color={"green"} data={this.state.allData2} />
            <div className="perfViewBtn" onClick={() => this.changeState2()}>{this.state.data2 ? "View 2018" : "View 2017" }</div>

            </div>
            <div className="flexPerformanceInner">
       <div className="perfTitle">% of Sickness Categories {this.state.data3 ? 2017 : 2018}</div>
                 <PieChart data={this.state.allData3}
                                    
                                   />

                 <div className="perfViewBtn" onClick={() => this.changeState3()}>{this.state.data3 ? "View 2018" : "View 2017" }</div>
       </div>
       <div className="flexPerformanceInner">
                        <div className="perfTitle">New Work {this.state.data1 ? 2017 : 2018}</div>
            <BarChart height={300} width={400} color={"purple"} data={this.state.allData1} />

            <div className="perfViewBtn" onClick={() => this.changeState()}>{this.state.data1 ? "View 2018" : "View 2017" }</div>
        </div>
        <div className="flexPerformanceInner">
                        <div className="perfTitle">Reviews {this.state.data1 ? 2017 : 2018}</div>
            <BarChart height={300} width={400} color={"pink"} data={this.state.allData1} />

            <div className="perfViewBtn" onClick={() => this.changeState()}>{this.state.data1 ? "View 2018" : "View 2017" }</div>
        </div>
        <div className="flexPerformanceInner">
                        <div className="perfTitle">Tasks {this.state.data1 ? 2017 : 2018}</div>
            <BarChart height={300} width={400} color={"yellow"} data={this.state.allData1} />

            <div className="perfViewBtn" onClick={() => this.changeState()}>{this.state.data1 ? "View 2018" : "View 2017" }</div>
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