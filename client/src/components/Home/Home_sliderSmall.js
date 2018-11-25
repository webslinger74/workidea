import React, { Component } from 'react';
import Slider from 'react-slick';
import MyButton from '../../Inputs/Button';
import file1 from '../../images/sports/sports1.jpg';
import file2 from '../../images/sports/beer.jpg';
import file3 from '../../images/sports/food.jpg';
import file4 from '../../images/sports/sports7.jpg';


class HomeSliderSmall extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            slidesToShow:1
         }
    }

    componentWillUnmount(){
        window.removeEventListener('resize', ()=> {
            console.log("listener removed");
        })

        window.removeEventListener('load', () => {
            console.log("removed 2nd load listener");
        })
    }


    
    componentDidMount(){

        window.addEventListener('click', () => {
            if(window.innerWidth < 850){
                console.log(window.innerWidth);
                this.setState({
                    slidesToShow:2
                })
                
            }
            if (window.innerWidth < 550 ){
                this.setState({
                    slidesToShow:1
                })
            }
            else if (window.innerWidth > 850 ){
                this.setState({
                    slidesToShow:3
                })
                
            }
          
        }) 

        window.addEventListener('load', () => {
            if(window.innerWidth < 850){
                console.log(window.innerWidth);
                this.setState({
                    slidesToShow:2
                })
                
            }
            if (window.innerWidth < 550 ){
                this.setState({
                    slidesToShow:1
                })
            }
            else if (window.innerWidth > 850 ){
                this.setState({
                    slidesToShow:3
                })
                
            }
          
        })

        window.addEventListener('resize', () => {
            if(window.innerWidth < 850){
                console.log(window.innerWidth);
                this.setState({
                    slidesToShow:2
                })
                
            }
            if (window.innerWidth < 550 ){
                this.setState({
                    slidesToShow:1
                })
            }
            else if (window.innerWidth > 850 ){
                this.setState({
                    slidesToShow:3
                })
                
            }
          
        })

    }


    slides = [
        {
            img: file1,
            lineOne:'',
            lineTwo:'',
            linkTitle:'Latest Events',
            linkTo:'/messages'
        },
        {
            img: file2,
            lineOne:'',
            lineTwo:'',
            linkTitle:'Discounts',
            linkTo:'/sports'
        } ,
        {
            img: file3,
            lineOne:'',
            lineTwo:'',
            linkTitle:'Pay-Day Bingo',
            linkTo:'/achievements'
        },
        {
            img: file4,
            lineOne:'',
            lineTwo:'',
            linkTitle:'Charity',
            linkTo:'/messages'
        },  {
            img: file1,
            lineOne:'',
            lineTwo:'',
            linkTitle:'Latest Events',
            linkTo:'/messages'
        },
        {
            img: file2,
            lineOne:'',
            lineTwo:'',
            linkTitle:'View Offers',
            linkTo:'/sports'
        } ,
        {
            img: file3,
            lineOne:'',
            lineTwo:'',
            linkTitle:'Pay Day Bingo',
            linkTo:'/achievements'
        },
        {
            img: file4,
            lineOne:'',
            lineTwo:'',
            linkTitle:'Charity',
            linkTo:'/messages'
        },  {
            img: file1,
            lineOne:'',
            lineTwo:'',
            linkTitle:'Whats Next',
            linkTo:'/messages'
        },
        {
            img: file2,
            lineOne:'',
            lineTwo:'',
            linkTitle:'View Offers',
            linkTo:'/sports'
        },
        {
            img: file3,
            lineOne:'',
            lineTwo:'',
            linkTitle:'Latest Events',
            linkTo:'/achievements'
        },
        {
            img: file1,
            lineOne:'',
            lineTwo:'',
            linkTitle:'Great Deals',
            linkTo:'/messages'
        }                
    ]
   
  
   
    generateSlides = () => (
       this.slides ? this.slides.map((item, i) => (
       <div key={i}>
            <div 
                style={{
                    background:`url(${item.img})`,
                    height:`${150}px`,
                    backgroundSize:'cover',
                    borderRight:'5px solid black'
                }}>

                <div className="featured_action">
                        <div className="tag title">{item.lineOne}</div>
                        <div className="tag low_title">{item.lineTwo}</div>
               <div>
                   <MyButton
                    type="default"
                    title={item.linkTitle}
                    linkTo={item.linkTo}
                    />
               </div>
                </div>


                </div>
       
       </div>))
       : null
   )
   

      render(){

        
       let settings = {
            autoplay:true,
            autoplaySpeed:3000,
            dots: false,
            infinite: true,
            speed:10000,
            slidesToShow:this.state.slidesToShow,
            arrows: false
           
        }
    
        return (


        <div id="sliderSmall">

        <Slider {...settings} >
            {this.generateSlides()}
        </Slider>

        </div>

     );
}
}
 
export default HomeSliderSmall;