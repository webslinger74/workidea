import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class UserLayout extends Component {
     constructor(props){
         super(props)


         this.state = {
             sportactive:false,
             wellbeingactive:false,
             siteperformanceactive:false,
             messageactive:false,
             adminactive:false
         }
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


    toggleButton = (type) => {

        let types = type;
        console.log(!(this.state[types]), "this .state");

        console.log(types, "the Types");
            this.setState({
              [types]:!(this.state[types])
            })
            console.log(this.state.wellbeingactive, "wellbeing");
            console.log(this.state.sportactive, "sports");
    }


    render() { 
            const { auth, isAdd } = this.props;

        return (
            <div className="user_container">
            <div className="user_left_navs">
            
            <h2>Admin Tasks</h2>
            <div className="links">

             <div className="taskbutton" onClick={() => this.toggleButton("adminactive")} >Admin Tasks</div>
            <div className={this.state.adminactive ? "open" : "closed"}>

            <Link to="/login">Login</Link>
            <Link to="/userdashboard">User Dashboard</Link>
            </div>

            <div className="taskbutton" onClick={() => this.toggleButton("messageactive")} >Main MessageBoard Tasks</div>
            <div className={this.state.messageactive ? "open" : "closed"}>

            <Link to="/messages">Create Message</Link>
            </div>
       

             <div className="taskbutton" onClick={() => this.toggleButton("wellbeingactive")} >WellBeing Tasks</div>
            <div className={this.state.wellbeingactive ? "open" : "closed"}>
            <Link to="/wellBeingAdmin">Input Well Being Events</Link>
            </div>

            <div className="taskbutton" onClick={() => this.toggleButton("sportactive")} >Sports & Social Tasks</div>
            <div className={this.state.sportactive ? "open" : "closed"}>
            <Link to="/sportsAdmin">Input Sports Events</Link>
            <Link to="/sports/christmasparty">Input Christmas Party Details</Link>
            <Link to="/sports/celebrationday">Input Celebration Day Agenda</Link>
            <Link to="/sports/charity">Input Charity Details</Link>
            <Link to="/sports/bingo">Input Bingo Numbers</Link>
            <Link to="/sports/contact">Input S&S Contact Details</Link>
            </div>
            
            <div className="taskbutton" onClick={() => this.toggleButton("siteperformanceactive")} >Site Performance Tasks</div>
            <div className={this.state.siteperformanceactive ? "open" : "closed"}>
            <Link to="/siteperformance">Input Site Performance</Link>
            <Link to="/siteperformanceEngAdmin">Input Site Engagement Scores</Link>
            </div>

                 <Link to="/managerMessage">Manager Input</Link>
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
 