import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { getPeg } from '../../actions/pegActions';
import Slider from 'react-slick';
import MyButton from '../../Inputs/Button';
import ReactHtmlParser from 'react-html-parser';

class HomeSlider2 extends Component {

    componentDidMount(){
        this.props.getPeg();
    }
    convertStringMessageToHtml = (string) => {
        const html = string;
        return <div>{ReactHtmlParser(html)}</div>
}

   
 
  settings = {
    adaptiveHeight:true,
    autoplay:true,
    autoplaySpeed:8000,
    pauseOnHover:false,
    dots: false,
    dotsClass:"dots",
    arrows: false,
    infinite: true,
    speed:0,
    slidesToShow: 1,
    slidesToScroll:1,
    pauseOnHover:true
}



  generateSlides = () => (
    this.props.slides ? this.props.slides.map((item, i) => (

    <div key={i} style={{height:'200%'}}>
     <div className="pegcont" style={{
                 background:`url(${item.images[0].url})`,
                 backgroundSize:'100% 100%',
                 height:'100%',
                 width:'60%'
             }}>
                        <div className="slide2-title">{item.title}</div>
                     <div className="slide2-message">{this.convertStringMessageToHtml(item.message)}</div>
            <div style={{paddingBottom:'5px'}}>
                <MyButton
                 type="default"
                 title="Go To PEG"
                 linkTo={"/peg"}
                 
                 />
    
            </div>

             </div>
    
    </div>))
    : null
)
   render(){
  

         return ( 

                 <div>

                    <Slider {...this.settings} >
                      {this.generateSlides()}
                    </Slider>

               </div>

     );
   }


     
    
}

const mapStateToProps = (state) => ({
        slides:state.peg.pegEvents
});

const actions = {
    getPeg
}
 
export default connect(mapStateToProps, actions)(HomeSlider2);