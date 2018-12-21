import React, { Component } from 'react';
import { getEngagementCategoryScores, deleteCategory } from '../actions/siteperformanceActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PieMeter from './PieMeter';

class LatestSitePerformance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPieMeter:false
         }
    }

    componentDidMount(){
        this.props.getEngagementCategoryScores();

        window.addEventListener('scroll', function(e){
            let somediv = document.getElementById('what');
            let distanceFromTop = somediv.getBoundingClientRect().top;

            if(distanceFromTop <200 && distanceFromTop >=50){
                       callstate2();
            }            
            if(distanceFromTop <= 0 && distanceFromTop >= -300){
                      callstate();    
            }

        let titleDiv = document.getElementById('chorltonT');
        let distance = titleDiv.getBoundingClientRect().top;

            titleDiv.style.paddingTop = distance * 0.2 + "px";
            titleDiv.style.height = distance + 160 + "px";
    
          })
            const callstate = () => {

                    if(!this.state.showPieMeter){
                     this.setState({
                        showPieMeter:true   
                             })
                            }
                        }
                }

      

    componentWillUnmount(){
        window.removeEventListener('scroll', function(e){

        });
    }

  
    render() { 
    
    
        const { engageCats } = this.props;
    
    
        return ( 
            <div className="totalContainer">
            <Link to="/siteperformance">

                <div className="frontMessages">
                <div id="what">
                    
                      <div id="chorltonT">LIFE AT CHORLTON?</div>
                    </div>
              
               
                </div>
                        <div className="engagementContainer1">
                    {engageCats && engageCats ? 
                             engageCats.map((cat, index) => {
                                 if(cat.category === "Engagement Index"){
                    return  ( <div key={index} className="engagementGridItem">
                    
                     <div style={{fontSize:'45px',color:'gold', fontWeight:'600', marginBottom:'15px'}}>{cat.category}</div>
                   {this.state.showPieMeter ?
                     <div><PieMeter amount={cat.score} /> </div> : null }
                     <div>Difference from Previous Year: {cat.diffprev} </div>
                     <div>Difference from Parent: {cat.diffparent} </div>
                     <div>Difference from DWW:{ cat.diffdwp} </div>
                     <div onClick={()=> this.props.deleteCategory({id:cat._id})} className="delete">Delete Category</div>
                        </div>
                        )}
                    }) :null}

                    </div>

                     <div className="engagementContainer">
                    {engageCats && engageCats ? 
                            engageCats.map((cat, index) => {
                                if(cat.category !== "Engagement Index"){
                    return  ( <div key={index} className="engagementGridItem">
                    
                     <div style={{fontSize:'30px', color:'gold', fontWeight:'600', marginBottom:'15px'}}>{cat.category}</div>
                              {this.state.showPieMeter ? <PieMeter amount={cat.score} /> : null }
                     <div>Difference from Previous Year: <span style={{fontSize:'20px'}}>{cat.diffprev}</span> </div>
                     <div>Difference from Parent: <span style={{fontSize:'20px'}}>{cat.diffparent} </span> </div>
                     <div>Difference from DWW: <span style={{fontSize:'20px'}}>{cat.diffdwp} </span></div>
                     <div onClick={()=> this.props.deleteCategory({id:cat._id})} className="delete">Delete Category</div>
                        </div>
                        )}
                    }) :null}

                    </div>
                    </Link>
            </div>
         );
    }
}


const actions = {
    getEngagementCategoryScores,
    deleteCategory
}

const mapStateToProps = (state) => ({
        engageCats:state.siteperformance.allCategories
})
 
export default connect(mapStateToProps, actions)(LatestSitePerformance);