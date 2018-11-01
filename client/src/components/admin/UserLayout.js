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
            <div className="user_left_nav">
            
            <h2>Admin Tasks</h2>
            <div className="links">
            <Link to="/login">Login</Link>
            <Link to="/messages">Create Message</Link>
            <Link to="/siteperformance">Input Site Performance</Link>
            <Link to="/managerMessage">Manager Input</Link>
            <Link to="/sports">Input Sports Events</Link>
            <Link to="/userdashboard">User Dashboard</Link>
            <Link to="/sports">Input Bingo Numbers</Link>
            </div>
            {console.log(isAdd, "recs")}
            {isAdd && isAdd.isAdmin ? 
            this.genLinks()
        : null}


            </div>
            <div className="user_right">
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
 