import React, { Component } from 'react';
import {connect} from 'react-redux';
import TextFieldGroup from '../../Inputs/TextFieldGroup';
import TextAreaFieldGroup from '../../Inputs/TextAreaFieldGroup';
import SelectListGroup from '../../Inputs/SelectListGroup';
import MyButton from '../../Inputs/Button';
import FileUpload from './FileUpload';
import UserLayout from './UserLayout';
import { addContact, addSiteEmail } from '../../actions/sportsActions';
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

class SportsContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
                sportsEmail:'',
                contactEmail:'',
                contactName:'',
                position:'',
                errors: {},
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
                    if( key === "sportsEmail" ){
                        this.state[key] = this.state[key].toString();
                    }
                    if( key === "contactEmail" ){
                        this.state[key] = this.state[key].toString();
                    }
                    if( key === "contactName" ){
                        this.state[key] = this.state[key].toString();
                    }
                    if( key === "position" ){
                        this.state[key] = this.state[key].toString();
                    }
                  
                    newState[key] = this.state[key];
          }
          console.log(newState, "state just before adding product");
        this.props.addContact(newState, this.props.history);

        }

        onSubmitSite = (e) => {
            e.preventDefault();

           const newState = {};
             for (let key in this.state){
            
                
                  if( key === "sportsEmail" ){
                      this.state[key] = this.state[key].toString();
                      newState[key] = this.state[key];
                      console.log(newState, "state just before adding product");
                      this.props.addSiteEmail(newState, this.props.history);
                  }
                }
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
                <h1>Add Sports & Social Contact Details</h1>
                <form onSubmit={(event) => this.onSubmitSite(event)}>
               
                <h3>Add Site Sports & Social Email Address</h3>
                <TextFieldGroup 
                                 type="text"
                                 placeholder="Sports Email"
                                 name="sportsEmail"
                                 error={errors.sportsEmail}
                                 value={this.state.sportsEmail}
                                 onChange={this.onChange}
                            />
                     
                        <input type="submit" className="btn btn-info btn-block mt-4" value="Submit Email"/>

                </form>

                <div className="form_devider"></div>

                <h3>Add Sports & Social Individual Contacts</h3>

                <form onSubmit={(event) => this.onSubmit(event)}>

                <h5>Add Contact's Photo</h5>
                 <FileUpload 
                    imagesHandler={(images) => this.imagesHandler(images)}
                    reset={this.state.formSuccess}
                
                
                />
                
                <TextFieldGroup 
                                type="text"
                                placeholder="Contact Name"
                                name="contactName"
                                error={errors.contactName}
                                value={this.state.contactName}
                                onChange={this.onChange}
                                style={{marginBottom:'10px'}}
                           />
                
               <TextFieldGroup 
                                type="text"
                                placeholder="Contact Email"
                                name="contactEmail"
                                error={errors.contactEmail}
                                value={this.state.contactEmail}
                                onChange={this.onChange}
                                style={{marginBottom:'10px'}}
                           />

                 <TextFieldGroup 
                                type="text"
                                placeholder="Position"
                                name="position"
                                error={errors.position}
                                value={this.state.position}
                                onChange={this.onChange}
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

                          <input type="submit" className="btn btn-info btn-block mt-4" value="Submit Contact"/>
                          <div className="form_devider"></div>

               </form>
            </div>

                                </UserLayout>
           
          );
    }
}
const actions = {
    addContact,
    addSiteEmail
}

const mapStateToProps = (state) => ({

})
 
export default connect(mapStateToProps, actions)(withRouter(SportsContact));