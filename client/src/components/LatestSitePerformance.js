import React, { Component } from 'react';
import { getEngagementCategoryScores } from '../actions/siteperformanceActions';
import { connect } from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import faSmile from '@fortawesome/fontawesome-free-solid/faSmile';


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
                <FontAwesomeIcon
                                    icon={faSmile}
                                    className="icon"
                                    size="6x"
                                    color="gold"
                                />
                <h1 style={{fontSize:'60px',borderBottom:'grey solid 8px', paddingBottom:'-10px'}}> Staff Engagement </h1>
                <FontAwesomeIcon
                                    icon={faSmile}
                                    className="icon"
                                    size="6x"
                                    color="gold"
                                />
                </div>
                        <div className="engagementContainer1">
                    {engageCats && engageCats ? 
                             engageCats.map((cat, index) => {
                                 if(cat.category === "Engagement Index"){
                    return  ( <div key={index} className="engagementGridItem">
                    
                     <div style={{fontSize:'50px',color:'gold', fontWeight:'600', marginBottom:'15px'}}>{cat.category}</div>
                     <div>Score:{cat.score} </div>
                     <div>Difference from Previous Year:{cat.diffprev} </div>
                     <div>Difference from Parent:{cat.diffparent} </div>
                     <div>Difference from DWW:{cat.diffdwp} </div>
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
                     <div>Score:{cat.score} </div>
                     <div>Difference from Previous Year:{cat.diffprev} </div>
                     <div>Difference from Parent:{cat.diffparent} </div>
                     <div>Difference from DWW:{cat.diffdwp} </div>
                        </div>
                        )}
                    }) :null}

                    </div>
            </div>
         );
    }
}


const actions = {
    getEngagementCategoryScores
}

const mapStateToProps = (state) => ({
        engageCats:state.siteperformance.allCategories
})
 
export default connect(mapStateToProps, actions)(LatestSitePerformance);