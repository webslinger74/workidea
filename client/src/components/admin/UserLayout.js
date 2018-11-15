import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class UserLayout extends Component {
     constructor(props){
         super(props)
     }

    genLinks = () => (
        <div>
         <h2>Admin</h2>
           {admin.map((item,index) => {
             return (
                <div className="links" key={index} > 
                <Link  to={item.linkTo}>{item.name}</Link> 
             </div>
             ) 
            })}
            </div>
    )


    render() { 
            const { auth, isAdd } = this.props;

        return (
            <div className="user_container">
            <div className="user_left_navs">
            
            <h2>Admin Tasks</h2>
            <div className="links">
            <Link to="/login">Login</Link>
            <Link to="/messages">Create Message</Link>
            <Link to="/siteperformance">Input Site Performance</Link>
            <Link to="/managerMessage">Manager Input</Link>
            <Link to="/wellBeingAdmin">Input Well Being Events</Link>
            <Link to="/sportsAdmin">Input Sports Events</Link>
            <Link to="/userdashboard">User Dashboard</Link>
            <Link to="/sports/bingo">Input Bingo Numbers</Link>
            <Link to="/siteperformanceEngAdmin">Input Site Engagement Scores</Link>
            <Link to="/sports/christmasparty">Input Christmas Party Details</Link>
            <Link to="/sports/celebrationday">Input Celebration Day Agenda</Link>
            <Link to="/sports/charity">Input Charity Details</Link>
            </div>
            {console.log(isAdd, "recs")}
            {isAdd && isAdd.isAdmin ? 
            this.genLinks()
        : null}


            </div>
            <div className="user_rights">
                     {this.props.children}
            
            
            </div>
            
            </div>          
          );
    }
}
const actions = {

}
const mapStateToProps = (state) => ({
    isAdd: state.auth.FullUserRecord,
    auth: state.auth
   
})
 
export default connect(mapStateToProps, actions)(UserLayout);
 