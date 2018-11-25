import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


export class Header extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
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
                    name:'Feedback',
                    linkTo:'/feedback',
                    public: true
                }
            ],
            user:[
                {
                    name: 'My Cart',
                    linkTo:'/user/cart',
                    public:false
                },
                {
                    name:'My Account',
                    linkTo:'/user/dashboard',
                    public:false
                },
                {
                    name:'Admin',
                    linkTo:'/login',
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
       
       
        console.log(this.state.width);

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

    cartLink = (item,i) => {
        if(this.props.currentUser){
        const  currentUser  = this.props.currentUser;
        console.log(currentUser, "this is the user from in the component");
        
        return (
            <div className="cart_link" key={i}>
                <span>{currentUser.cart ? currentUser.cart.length : 0}</span>
                <Link to={item.linkTo}>
                    {item.name}
                </Link>
            </div>
        )
    }
}

    defaultLinks = (item, i) => (
        item.name === 'Log Out' ?
            <div className="log_out_link"
                key={i}
                onClick={() => this.props.logoutUser(this.props.history)}
                >

                 {item.name}

            </div>:
                 <Link key={i} to={item.linkTo}>{item.name}</Link>
        
                 )


    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({
            active:!currentState
        })
    }
    
    windowWidth = () => {
        console.log(window.innerWidth,"the window width");
        if (window.innerWidth <= 850)
            return (
                <div>
            <div onClick={this.toggleClass}>
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
            <header className="bck_b_light flowers">
            
            <div className="left">
            <div className="logo">
            CHORLTON
            </div>
            </div>
            <div className="right">
            <div className="top">

            {this.showLinks(this.state.user)}
            </div>
            
            {this.windowWidth()}
            

            </div>

            </header>
          );
    }
}
 

const mapStateToProps = (state) => ({
  //  auth: state.auth.isAuthenticated,
  //  currentUser: state.auth.FullUserRecord
})

const actions = {
    
}

export default connect(mapStateToProps, actions)(withRouter(Header));




