import React, { Component } from 'react';
import {connect} from 'react-redux';
import TextFieldGroup from '../../Inputs/TextFieldGroup';
import TextAreaFieldGroup from '../../Inputs/TextAreaFieldGroup';
import SelectListGroup from '../../Inputs/SelectListGroup';
import MyButton from '../../Inputs/Button';
import FileUpload from './FileUpload';
import UserLayout from './UserLayout';
import { addSlide } from '../../actions/slideActions';
import { withRouter } from 'react-router-dom';

const Bool = [
    {
        "name":"YES",
        "_id":1
    },
    {
        "name":"NO",
        "_id":0
    }
]

const pageCat = [
    {
        "name":"messageboard",
        "_id":1
    },
    {
        "name":"events",
        "_id":2
    },
    {
        "name":"wellbeing/Events",
        "_id":3
    },
    {
        "name":"guidance",
        "_id":4
    },
    {
        "name":"manager",
        "_id":5
    },
    {
        "name":"peg",
        "_id":6
    }
]

class HomeSliderInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
                titleOne:'',
                titleTwo:'',
                pageCat:'',
                linkTitle:'',
                errors: {},
                publish:false,
                formSuccess: false,
                images: []
              };
             
            }
            // for the text-editor to pass in the message
            getStateValue = (editorState) => {
                this.setState({message:editorState})
                console.log(this.state);
            }

            onChange = (e) => {
              this.setState({ [e.target.name]: e.target.value });
            }
          
            onSubmit = (e) => {
              e.preventDefault();

             const newState = {};
               for (let key in this.state){
              
                    if(this.state[key] === "YES"){
                        this.state[key] = true;
                    }
                    if(this.state[key] === "NO"){
                        this.state[key] = false;
                    }
                    if( key === "titleOne" ){
                        this.state[key] = this.state[key].toString();
                    }
                    if( key === "titleTwo" ){
                        this.state[key] = this.state[key].toString();
                    }
                    if( key === "linkTitle" ){
                        this.state[key] = this.state[key].toString();
                    }
                                                       
                    newState[key] = this.state[key];
          }
          console.log(newState, "state just before adding product");
        this.props.addSlide(newState, this.props.history);

        }


          componentDidMount(){
          }

          componentWillUnmount(){
            
          }

          componentDidUpdate(prevProps) {
            if((prevProps.errors !== this.props.errors) && (Object.keys(this.props.errors).length === 0)){
                this.setState({
                    errors: {},
                    images:[],
                    formSuccess:true
                })
                setTimeout(() => {
                    this.setState({
                        formSuccess:false
                    })
                },1500);
            }

           
            // here is where the component state errors get updated from redux state errors
            if(prevProps.errors !== this.props.errors && Object.keys(this.props.errors).length > 0){
                this.setState({
                    errors:this.props.errors
                })
            }
    
            
        }
      
//this gets array of updated images from inside dropzone after axios request completed
    imagesHandler = (allImages) => {
           this.setState({
               ...this.state.images,
               images:allImages
           },()=> {
            console.log(this.state, "the state in add product after set state call back!") 
           })
    }


    render() { 
        const {errors} = this.state;
        return (
            <UserLayout>
            <div>
                <h1>Add HomePage Slide</h1>
                <form onSubmit={(event) => this.onSubmit(event)}>
                
                <FileUpload 
                    imagesHandler={(images) => this.imagesHandler(images)}
                    reset={this.state.formSuccess}
                
                
                />
                
                <TextFieldGroup 
                                 type="text"
                                 placeholder="Title Line One"
                                 name="titleOne"
                                 error={errors.titleOne}
                                 value={this.state.titleOne}
                                 onChange={this.onChange}
                                 style={{marginBottom:'10px'}}
                            />

                 <TextFieldGroup 
                                 type="text"
                                 placeholder="Title Line Two"
                                 name="titleTwo"
                                 error={errors.titleTwo}
                                 value={this.state.titleTwo}
                                 onChange={this.onChange}
                                 style={{marginBottom:'10px'}}
                            />         
                   <TextFieldGroup 
                                 type="text"
                                 placeholder="Link Title"
                                 name="linkTitle"
                                 error={errors.linkTitle}
                                 value={this.state.linkTitle}
                                 onChange={this.onChange}
                                 style={{marginBottom:'10px'}}
                            />            

                <div className="form_devider"></div>
                            
                            <SelectListGroup 
                                             name="pageCat"
                                             value={this.state.pageCat}
                                             error={errors.pageCat}
                                             onChange={this.onChange}
                                             options={pageCat}
                                             placeholder="Page Category"
                                             style={{marginBottom:'10px'}}
                                        
                                        />  
                            
                            <SelectListGroup
                                 type="text"
                                 placeholder="Publish"
                                 name="publish"
                                 error={errors.publish}
                                 value={this.state.publish}
                                 onChange={this.onChange}
                                 options={Bool}
                                 style={{marginBottom:'10px'}}
                            />

                             <div>
                                 
                            {this.state.formSuccess === true ? 
                                (<div className="form_success">
                                    You have succesfully added your Guitar
                                </div>): null}



                            { this.state.formError ?
                                <div className="error_label">
                                    Please check your data
                                </div>
                            :null}
                            </div>

                           <input className="submitBtn" type="submit"  value="Add Slide"/>

                </form>
            </div>

                                </UserLayout>
           
          );
    }
}
const actions = {
    addSlide
}

const mapStateToProps = (state) => ({

})
 
export default connect(mapStateToProps, actions)(withRouter(HomeSliderInput));