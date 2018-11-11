import React, { Component } from 'react';
import { getEngagementCategoryScores, deleteCategory } from '../actions/siteperformanceActions';
import { connect } from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import faBullseye from '@fortawesome/fontawesome-free-solid/faBullseye';


class LatestSitePerformance extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        this.props.getEngagementCategoryScores();
    }



    render() { 
        const { engageCats } = this.props;
        return ( 
            <div className="totalContainer">

                <div className="frontMessages">
              
                <h1 style={{paddingLeft:'3%', textAlign:'center', backgroundColor:'gray', fontSize:'60px', textShadow:'2px solid black', letterSpacing:'3px', color:'gold'}}> CHORLTON STAFF ENGAGEMENT </h1>
               
                </div>
                        <div className="engagementContainer1">
                    {engageCats && engageCats ? 
                             engageCats.map((cat, index) => {
                                 if(cat.category === "Engagement Index"){
                    return  ( <div key={index} className="engagementGridItem">
                    
                     <div style={{fontSize:'50px',color:'gold', fontWeight:'600', marginBottom:'15px'}}>{cat.category}</div>
                     <div><span style={{fontSize:'60px'}}>{cat.score}</span> </div>
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
                     <div><span style={{fontSize:'50px'}}>{ cat.score} </span></div>
                     <div>Difference from Previous Year: <span style={{fontSize:'20px'}}>{cat.diffprev}</span> </div>
                     <div>Difference from Parent: <span style={{fontSize:'20px'}}>{cat.diffparent} </span> </div>
                     <div>Difference from DWW: <span style={{fontSize:'20px'}}>{cat.diffdwp} </span></div>
                     <div onClick={()=> this.props.deleteCategory({id:cat._id})} className="delete">Delete Category</div>
                        </div>
                        )}
                    }) :null}

                    </div>
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