import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { getSlides, deleteSlide } from '../../actions/slideActions';
import Slider from 'react-slick';
import MyButton from '../../Inputs/Button';


class HomeSlider extends Component {

    componentDidMount(){
        this.props.getSlides();
    }
 
   
 
  settings = {
    autoplay:true,
    autoplaySpeed:4000,
    dots: false,
    infinite: true,
    speed:8000,
    slidesToShow:1,
    arrows: false
   
}

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
                <div onClick={()=> this.props.deleteSlide({id:item._id}, item.images)}>delete</div>

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
    getSlides,
    deleteSlide

}
 
export default connect(mapStateToProps, actions)(HomeSlider);