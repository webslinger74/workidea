import React, { Component } from 'react';
import { getEngagementCategoryScores } from '../actions/siteperformanceActions';
import { connect } from 'react-redux';

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
            <div>

                <div className="frontMessages">
                <h1>Staff Engagement</h1>
                </div>
                    {engageCats && engageCats ? 
                            engageCats.map((cat, index) => {
                    return  ( <div key={index} className="frontMessages">
                     <div>{cat.category}</div>
                     <div>Score:{cat.score} </div>
                     <div>Difference from Previous Year:{cat.diffprev} </div>
                     <div>Difference from Parent:{cat.diffparent} </div>
                     <div>Difference from DWW:{cat.diffdwp} </div>
                        </div>)
                    }) :null}
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