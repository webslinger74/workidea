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
    autoplaySpeed:10000,
    pauseOnHover:false,
    pauseOnFocus:false,
    dots: false,
    infinite: true,
    speed:2500,
    fade:true,
    slidesToShow:1,
    slidesToScroll:1,
    arrows: false,
    afterChange: function() {
        let siblings = document.querySelectorAll(".slick-slide");
        let current = document.querySelector(".slick-current");
      //  console.log(siblings, "siblings")
            if(siblings.length > 0){

        for(let i = 0; i < siblings.length; i++) {
            siblings[i].style.zIndex = 0;
        }
        current.style.zIndex = 10;
    }
}
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
             </div>{this.props.auth ?
                <div style={{ textAlign:"center", width:"100px", fontSize:"20px", backgroundColor:"black", color:"white"}}onClick={()=> this.props.deleteSlide({id:item._id}, item.images)}>delete</div>
                : null }
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
        slides:state.slide.slides,
        auth:state.auth.isAuthenticated
});

const actions = {
    getSlides,
    deleteSlide

}
 
export default connect(mapStateToProps, actions)(HomeSlider);