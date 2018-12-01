import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { getSlides } from '../../actions/slideActions';
import Slider from 'react-slick';
import MyButton from '../../Inputs/Button';
import file1 from '../../images/featured/business.jpg';
import file2 from '../../images/featured/sports.jpg';
import file3 from '../../images/featured/productivity.jpg';
import file4 from '../../images/featured/manchester.jpg';

class HomeSlider extends Component {

    componentDidMount(){
        this.props.getSlides();
    }
   
    slides = [
        {
            img: file1,
            lineOne:'Latest News',
            lineTwo:'Upto Date',
            linkTitle:'Latest Info',
            linkTo:'/messageboard'
        },
        {
            img: file2,
            lineOne:'Engagement Activities',
            lineTwo:'Hassra Discounts',
            linkTitle:'View Offers',
            linkTo:'/events'
        } ,
        {
            img: file3,
            lineOne:'Productivity',
            lineTwo:'Quality vs Quantity',
            linkTitle:'See latest guidance',
            linkTo:'/sitePerformance'
        },
        {
            img: file4,
            lineOne:'Chorlton Headlines',
            lineTwo:'Targets for coming year',
            linkTitle:'Hear from the SEO',
            linkTo:'/manager'
        }      
    ]
   
    settings = {
        autoplay:true,
        autoplaySpeed:4000,
        dots: false,
        infinite: true,
        speed:8000,
        slidesToShow:1,
        arrows: false
       
    }
  /* 
   generateSlides = () => (
       this.slides ? this.slides.map((item, i) => (
       <div key={i}>
            <div className="featured_image"
                style={{
                    background:`url(${item.img})`,
                    height:`${window.innerHeight}px`
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
   */
  generateSlides = () => (
    this.props.slides ? this.props.slides.map((item, i) => (
    <div key={i}>
         <div className="featured_image"
             style={{
                 background:`url(${item.images[0].url})`,
                 height:`${window.innerHeight}px`
             }}>

             <div className="featured_action">
                     <div className="tag title">{item.titleOne}</div>
                     <div className="tag low_title">{item.titleTwo}</div>
            <div>
                <MyButton
                 type="default"
                 title={item.linkTitle}
                 linkTo={"/" + item.pageCat}
                 />
            </div>
             </div>


             </div>
    
    </div>))
    : null
)
   render(){
  

         return ( 

                 <div className="featured_container">

                    <Slider {...this.settings} >
                      {this.generateSlides()}
                    </Slider>

               </div>

     );
   }


     
    
}

const mapStateToProps = (state) => ({
        slides:state.slide.slides
});

const actions = {
    getSlides

}
 
export default connect(mapStateToProps, actions)(HomeSlider);