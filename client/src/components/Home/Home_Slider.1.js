import React from 'react';
import Slider from 'react-slick';
import MyButton from '../../Inputs/Button';
import file1 from '../../images/featured/business.jpg';
import file2 from '../../images/featured/sports.jpg';
import file3 from '../../images/featured/productivity.jpg';
import file4 from '../../images/featured/manchester.jpg';

const HomeSlider = (props) => {
   
    const slides = [
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
   
    const settings = {
        autoplay:true,
        autoplaySpeed:4000,
        dots: false,
        infinite: true,
        speed:8000,
        slidesToShow:1,
        arrows: false
       
    }
   
  const generateSlides = () => (
       slides ? slides.map((item, i) => (
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
   
   
   
    return ( 

        <div className="featured_container">

        <Slider {...settings} >
            {generateSlides()}
        </Slider>

        </div>

     );
}
 
export default HomeSlider;