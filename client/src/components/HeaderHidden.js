import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


export class HeaderHidden extends Component {
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
            ]
           
        }

    }

    componentDidMount(){
        let somediv = document.getElementById('bottomWide');
        somediv.style.position = "fixed";
        somediv.style.transitionProperty = "opacity";
        somediv.style.transitionDuration = "all 3s"

     //   let distanceFromTop = somediv.getBoundingClientRect().top;
        window.addEventListener('scroll', function(e){
     let dFromTop = window.scrollY;
  //   console.log(dFromTop, "d from top");
     if(dFromTop > 60){
        somediv.style.top = 0;
        somediv.style.zIndex = 50000000;
        somediv.style.opacity = 1;
        }
        else {
            somediv.style.zIndex = -5000000000000;
            somediv.style.top = -50;
            somediv.style.opacity = 0;
        }           
    })
                  
    }

    componentDidUpdate(){
              
    }

    showLinks = (type) => {
        let list = [];
        if(!this.props.auth){
            console.log("not logged in")
            if(type === this.state.user){
                type.filter(link => {
               if(link.public === true){
                   list.push(link)
               }    
                })
                console.log(list, "this is the list of links after filter")
               const newlist =  list.map((item, i) =>  {
                  return this.defaultLinks(item, i)
              })
              console.log(newlist, "this is the post list")
              return newlist;



                 } else {
                    if(type === this.state.page){
                        const pagelist = type.map((item,i) => {
                            return this.defaultLinks(item,i)
                        })
                        console.log(pagelist, "this is the post list of public links")
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
                    if(item.name !== "My Cart"){
                    return this.defaultLinks(item,i);
                    } else {
                        return this.cartLink(item,i);
                    }
                });
                console.log(newlist, "this is the post list")
                return newlist;
            }
            else {
                if(type === this.state.page){
                    const pagelist = type.map((item,i) => {
                        return this.defaultLinks(item,i)
                    })
                    console.log(pagelist, "this is the post list of public links")
                    return pagelist
                }  
            }   
        }
    }

   
    changeColor = (name)=> {
        console.log("is it called");
            this.setState({
                link:[name]
            }, () => {
                   })
    }


    defaultLinks = (item, i) => (
        item.name === 'Log Out' ?
            <div className="log_out_link"
                key={i}
                onClick={() => this.props.logoutUser(this.props.history)}
                >

                 {item.name}

            </div>:
                 <Link className={this.state.link && (this.state.link[0] === item.name) ? "RED": "BLACK"}
                  onClick={() => this.changeColor(item.name)} key={i} to={item.linkTo}>{item.name}</Link>
        
                 )


    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({
            active:!currentState
        })
    }
    
      
                    
   
     
    render() { 


        return (
            <div className="headerHidden">  
            
                      <div className="mainHiddenHeader">
          
            <div id='bottomWide'>
            
            
            {this.showLinks(this.state.page)}


            </div>

            </div>

            </div>
          );
    }
}
 

const mapStateToProps = (state) => ({
  //  auth: state.auth.isAuthenticated,
  //  currentUser: state.auth.FullUserRecord
})

const actions = {
    
}

export default connect(mapStateToProps, actions)(withRouter(HeaderHidden));




