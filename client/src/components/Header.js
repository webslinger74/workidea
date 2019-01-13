import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {logoutUser} from '../actions/userActions';


export class Header extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            link:["Home"],
            width:window.innerWidth,
            active:false,
            page: [
                {
                    name:'Home',
                    linkTo:'/',
                    public: true
                },
                {
                    name:'Messages',
                    linkTo:'/messageboard',
                    public: true
                },
                {
                    name:'Sports & Social',
                    linkTo:'/events',
                    public: true
                },
                {
                    name:'Well-Being',
                    linkTo:'/wellbeing/Events',
                    public: true
                },
               {
                    name:'Guidance',
                    linkTo:'/guidance',
                    public: true
                    },                {
                    name:'Site Performance',
                    linkTo:'/sitePerformance',
                    public: true
                },
                {
                    name:'Manager',
                    linkTo:'/manager',
                    public: true
                },
                {
                    name:'PEG',
                    linkTo:'/peg',
                    public: true
                },
                {
                    name:'Feedback',
                    linkTo:'/feedback',
                    public: true
                }
            ],
            user:[
                {
                    name: 'Admin',
                    linkTo:'/admin',
                    public:false
                },
                {
                    name:'My Account',
                    linkTo:'/userdashboard',
                    public:false
                },
                {
                    name:'Admin',
                    linkTo:'/admin',
                    public:true
                },
                {
                    name:'Log Out',
                    linkTo:'/user/logout',
                    public:false
                }

            ]
        }

    }

    componentDidMount(){

        
        window.addEventListener('resize', ()=> {
            console.log("changed");
            this.setState({active:false});
            this.windowWidth();
        })
        window.addEventListener('load', ()=> {
            this.setState({active:false});
            this.windowWidth();
        })
        window.addEventListener('click', ()=> {
            this.windowWidth();
        })
       
       
   //     console.log(this.state.width);

    }

    componentDidUpdate(){
        
    }
    componentWillUnmount(){
       window.removeEventListener('resize', this.handleResize);
    }

    handleResize = () => this.forceUpdate();

    showLinks = (type) => {
        let list = [];
        if(!this.props.auth){
       //     console.log("not logged in")
            if(type === this.state.user){
                type.filter(link => {
               if(link.public === true){
                   list.push(link)
               }    
                })
          //      console.log(list, "this is the list of links after filter")
               const newlist =  list.map((item, i) =>  {
                  return this.defaultLinks(item, i)
              })
        //      console.log(newlist, "this is the post list")
              return newlist;



                 } else {
                    if(type === this.state.page){
                        const pagelist = type.map((item,i) => {
                            return this.defaultLinks(item,i)
                        })
                //        console.log(pagelist, "this is the post list of public links")
                        return pagelist
                    }                 
                }           
        } else {



            if(type === this.state.user){
                type.filter(link => {
                    if(link.public === false){
                        list.push(link)
                    }
                })
                const newlist = list.map((item, i) => {
                    
                    return this.defaultLinks(item,i);
                    }                  
                );
         //       console.log(newlist, "this is the post list")
                return newlist;
            }
            else {
                if(type === this.state.page){
                    const pagelist = type.map((item,i) => {
                        return this.defaultLinks(item,i)
                    })
              //      console.log(pagelist, "this is the post list of public links")
                    return pagelist
                }  
            }   
        }
    }

   
    changeColor = (name)=> {
    //    console.log("is it called");
            this.setState({
                link:[name]
            }, () => {
                   })
    }


    defaultLinks = (item, i) => (
        item.name === 'Log Out' ?
            <div className="logoutBtn" style={{paddingRight:'20px'}}
                key={i}
                onClick={() => this.props.logoutUser(this.props.history)}
                >

                 {item.name}

            </div>:
                 <Link style={{paddingRight:'20px'}} className={this.state.link && (this.state.link[0] === item.name) ? "RED": "BLACK"} onClick={() => this.changeColor(item.name)} key={i} to={item.linkTo}>{item.name}</Link>
        
                 )


    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({
            active:!currentState
        })
    }
    
    windowWidth = () => {
     //   console.log(window.innerWidth,"the window width");
        if (window.innerWidth <= 950)
            return (
                <div>
            <div className="headerMenuBtn" onClick={this.toggleClass}>
            Menu
            </div>
            {this.state.active ? <div className="bottom">{this.showLinks(this.state.page)}</div>
            :<div className="hiddenMenus"></div>}
            </div>
            )
            
        else 
            return (
                
                <div className='bottom'>
            
            
            {this.showLinks(this.state.page)}


            </div>
            )
        
           }
        
  
                    

  
  
    
 
    render() { 


        return (
            <div className="header" id="headerOne">
            
            <div className="left">
            <div className="logo">
             SITE NAME
            </div>
            </div>
            <div className="right">
            <div className="top">

            {this.showLinks(this.state.user)}
            </div>
            
            {this.windowWidth()}
            

            </div>

            </div>
          );
    }
}
 

const mapStateToProps = (state) => ({
   auth: state.auth.isAuthenticated,
  //  currentUser: state.auth.FullUserRecord
})

const actions = {
    logoutUser
}

export default connect(mapStateToProps, actions)(withRouter(Header));




