import React, { Component } from 'react';
import {connect} from 'react-redux';
import TextFieldGroup from '../../Inputs/TextFieldGroup';
import TextAreaFieldGroup from '../../Inputs/TextAreaFieldGroup';
import SelectListGroup from '../../Inputs/SelectListGroup';
import MyButton from '../../Inputs/Button';
import FileUpload from './FileUpload';
import UserLayout from './UserLayout';
import { addCharity } from '../../actions/sportsActions';
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

class InputCharity extends Component {
    constructor(props) {
        super(props);
        this.state = {
                charityName:'',
                amount:'',
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
                    if( key === "charityName" ){
                        this.state[key] = this.state[key].toString();
                    }
                    if( key === "amount" ){
                        this.state[key] = this.state[key].toString();
                    }
                  
                    newState[key] = this.state[key];
          }
          console.log(newState, "state just before adding product");
        this.props.addCharity(newState, this.props.history);

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
      

    render() { 
        const {errors} = this.state;
        return (
            <UserLayout>
            <div>
                <h1>Input Charity Details</h1>
                <form onSubmit={(event) => this.onSubmit(event)}>
               
                
                <TextFieldGroup 
                                 type="text"
                                 placeholder="Charity Name"
                                 name="charityName"
                                 error={errors.charityName}
                                 value={this.state.charityName}
                                 onChange={this.onChange}
                                 style={{marginBottom:'10px'}}
                            />
                <TextFieldGroup 
                                 type="text"
                                 placeholder="Amount Raised"
                                 name="amount"
                                 error={errors.amount}
                                 value={this.state.amount}
                                 onChange={this.onChange}
                                 style={{marginBottom:'10px'}}
                            />
                                         
                            
                <div className="form_devider"></div>
                              

                          

                          

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

                           <input className="submitBtn" type="submit" value="Add Charity" />

                </form>
            </div>

                                </UserLayout>
           
          );
    }
}
const actions = {
    addCharity
}

const mapStateToProps = (state) => ({

})
 
export default connect(mapStateToProps, actions)(withRouter(InputCharity));