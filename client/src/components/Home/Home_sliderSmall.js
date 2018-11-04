import React from 'react';
import Slider from 'react-slick';
import MyButton from '../../Inputs/Button';
import file1 from '../../images/sports/sports1.jpg';
import file2 from '../../images/sports/beer.jpg';
import file3 from '../../images/sports/food.jpg';
import file4 from '../../images/sports/sports7.jpg';

const HomeSliderSmall = (props) => {
   
    const slides = [
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
   
    const settings = {
        autoplay:true,
        autoplaySpeed:3000,
        dots: false,
        infinite: true,
        speed:10000,
        slidesToShow:4,
        arrows: false
       
    }
   
  const generateSlides = () => (
       slides ? slides.map((item, i) => (
       <div key={i}>
            <div 
                style={{
                    background:`url(${item.img})`,
                    height:`${200}px`,
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
   
   
   
    return ( 

        <div id="sliderSmall">

        <Slider {...settings} >
            {generateSlides()}
        </Slider>

        </div>

     );
}
 
export default HomeSliderSmall;