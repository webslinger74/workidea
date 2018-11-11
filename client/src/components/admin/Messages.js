import React, { Component } from 'react';
import {connect} from 'react-redux';
import TextFieldGroup from '../../Inputs/TextFieldGroup';
import TextAreaFieldGroup from '../../Inputs/TextAreaFieldGroup';
import SelectListGroup from '../../Inputs/SelectListGroup';
import MyButton from '../../Inputs/Button';
import FileUpload from './FileUpload';
import UserLayout from './UserLayout';
import { addMessage } from '../../actions/messageActions';
import MyComponent from '../../utils/editor';
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

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
                title:'',
                message:'',
                errors: {},
                publish:false,
                author:'',
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
                    if( key === "title" ){
                        this.state[key] = this.state[key].toString();
                    }
                    if( key === "message" ){
                        this.state[key] = this.state[key].toString();
                    }
                    if( key === "author" ){
                        this.state[key] = this.state[key].toString();
                    }

                    if(key === "brand"){
                     const getId = this.props.brands.filter((brandobj) => {
                        if(brandobj.name === this.state[key]){
                                return brandobj._id;
                          }
                        })

                        if(getId.length === 0){
                            console.log(getId, "if undefined??")
                            this.state[key] = undefined;
                        } else {
                            this.state[key] = getId[0]._id
                        }
                    }
                    if(key === "wood"){
                     const getId = this.props.woods.filter((woodobj) => {
                        if(woodobj.name === this.state[key]){
                                return woodobj._id;
                            }
                        })
                        if(getId.length === 0){
                            this.state[key] = undefined;
                        } else {
                            this.state[key] = getId[0]._id
                        }
                    }
                    newState[key] = this.state[key];
          }
          console.log(newState, "state just before adding product");
        this.props.addMessage(newState, this.props.history);

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
                <h1>Create Message</h1>
                <form onSubmit={(event) => this.onSubmit(event)}>
                
                <FileUpload 
                    imagesHandler={(images) => this.imagesHandler(images)}
                    reset={this.state.formSuccess}
                
                
                />
                
                <TextFieldGroup 
                                 type="text"
                                 placeholder="Title of Message"
                                 name="title"
                                 error={errors.title}
                                 value={this.state.title}
                                 onChange={this.onChange}
                            />


                 <MyComponent 
                 getStateValue={this.getStateValue}

                 />
              
                              

                <div className="form_devider"></div>
                               {this.props.woods ?
                            <SelectListGroup 
                                             name="wood"
                                             value={this.state.wood}
                                             error={errors.wood}
                                             onChange={this.onChange}
                                             options={this.props.woods}
                                             placeholder="Type of Wood"
                                        
                                        />: null}  

                             <TextFieldGroup 
                                 type="text"
                                 placeholder="Author"
                                 name="author"
                                 error={errors.author}
                                 value={this.state.author}
                                 onChange={this.onChange}
                            />  

                            <SelectListGroup
                                 type="text"
                                 placeholder="Publish"
                                 name="publish"
                                 error={errors.publish}
                                 value={this.state.publish}
                                 onChange={this.onChange}
                                 options={Bool}
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

                           <input type="submit" className="btn btn-info btn-block mt-4" />

                </form>
            </div>

                                </UserLayout>
           
          );
    }
}
const actions = {
    addMessage
}

const mapStateToProps = (state) => ({

})
 
export default connect(mapStateToProps, actions)(withRouter(Messages));