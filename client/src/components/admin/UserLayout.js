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
             adminactive:false,
             manageractive:false,
             guidanceactive:false,
             pegactive:false
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

             <div className="taskbutton" onClick={() => this.toggleButton("adminactive")} >Admin Tasks{this.state.adminactive ? " -" : " +"} </div>
            <div className={this.state.adminactive ? "open" : "closed"}>

            <Link className="adminlinks" to="/login">Login</Link>
            <Link className="adminlinks" to="/register">Register</Link>
            <Link className="adminlinks" to="/userdashboard">User Dashboard</Link>
            <Link className="adminlinks" to="/inputSlide">Add HomeSlider slide</Link>
            </div>

            <div className="taskbutton" onClick={() => this.toggleButton("messageactive")} >Main MessageBoard Tasks {this.state.messageactive ? " -" : " +"}</div>
            <div className={this.state.messageactive ? "open" : "closed"}>

            <Link className="adminlinks" to="/messages">Create Message</Link>
            </div>
       

             <div className="taskbutton" onClick={() => this.toggleButton("wellbeingactive")} >WellBeing Tasks {this.state.wellbeingactive ? " -" : " +"}</div>
            <div className={this.state.wellbeingactive ? "open" : "closed"}>
            <Link className="adminlinks" to="/wellBeingAdmin">Input Well Being Events</Link>
            </div>
 
            <div className="taskbutton" onClick={() => this.toggleButton("sportactive")} >Sports & Social Tasks {this.state.sportactive ? " -" : " +"}</div>
            <div className={this.state.sportactive ? "open" : "closed"}>
            <Link className="adminlinks" to="/sportsAdmin">Input Sports Events</Link>
            <Link className="adminlinks" to="/sports/christmasparty">Input Christmas Party Details</Link>
            <Link  className="adminlinks" to="/sports/celebrationday">Input Celebration Day Agenda</Link>
            <Link  className="adminlinks" to="/sports/charity">Input Charity Details</Link>
            <Link className="adminlinks" to="/sports/bingo">Input Bingo Numbers</Link>
            <Link  className="adminlinks" to="/sports/contact">Input S&S Contact Details</Link>
            </div>
            
            <div className="taskbutton" onClick={() => this.toggleButton("siteperformanceactive")} >Site Performance Tasks {this.state.siteperformanceactive ? " -" : " +"}</div>
            <div className={this.state.siteperformanceactive ? "open" : "closed"}>
            <Link className="adminlinks" to="/siteperformance">Input Site Performance</Link>
            <Link className="adminlinks" to="/siteperformanceEngAdmin">Input Site Engagement Scores</Link>
            </div>
            <div className="taskbutton" onClick={() => this.toggleButton("manageractive")} >Manager Tasks {this.state.manageractive ? " -" : " +"}</div>
            <div className={this.state.manageractive ? "open" : "closed"}>
                 <Link className="adminlinks" to="/managerMessage">Manager Input</Link>
                 </div>
            <div className="taskbutton" onClick={() => this.toggleButton("guidanceactive")} >Guidance Tasks {this.state.guidanceactive ? " -" : " +"}</div>
            <div className={this.state.guidanceactive ? "open" : "closed"}>
                 <Link className="adminlinks" to="/guidanceAdmin">Guidance Input</Link>
                 </div>
            <div className="taskbutton" onClick={() => this.toggleButton("pegactive")} >PEG {this.state.pegactive ? " -" : " +"}</div>
            <div className={this.state.pegactive ? "open" : "closed"}>
                 <Link className="adminlinks" to="/pegAdmin">PEG</Link>
                 </div>
            </div>
          
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
 