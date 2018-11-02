import React, { Component } from 'react';
import {connect} from 'react-redux';
import TextFieldGroup from '../../Inputs/TextFieldGroup';
import SelectListGroup from '../../Inputs/SelectListGroup';
import UserLayout from './UserLayout';
import { addBingoNumber } from '../../actions/sportsActions';

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
/*const numbers = [
    {
        "name":1,
        "_id":1
    },
    {
        "name":2,
        "_id":2
    },
    {
        "name":3,
        "_id":3
    },
    {
        "name":4,
        "_id":4
    },
    {
        "name":5,
        "_id":5
    },
    {
        "name":6,
        "_id":6
    },
    {
        "name":7,
        "_id":7
    },
    {
        "name":8,
        "_id":8
    },
    {
        "name":9,
        "_id":9
    },
    {
        "name":10,
        "_id":10
    },
    {
        "name":11,
        "_id":11
    },
    {
        "name":12,
        "_id":12
    }
]
*/

const numbers = [];

for(let x=1; x < 91; x++){
    numbers.push({
        "name":x,
        "_id":x
    })
    console.log(numbers, "numbers")
}






class InputBingo extends Component {
    constructor(props) {
        super(props);
        this.state = {
                number:'',
                errors: {},
                formSuccess: false
              };
             
            }
            /* for the text-editor to pass in the message
            getStateValue = (editorState) => {
                this.setState({message:editorState})
                console.log(this.state);
            }
            */              
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

                  
                    newState[key] = this.state[key];
          }
          console.log(newState, "state just before adding product");
        this.props.addBingoNumber(newState);

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
/*    imagesHandler = (allImages) => {
           this.setState({
               ...this.state.images,
               images:allImages
           },()=> {
            console.log(this.state, "the state in add product after set state call back!") 
           })
    }
*/

    render() { 
        const {errors} = this.state;
        return (
            <UserLayout>
            <div>
                <h1>Input Bingo Numbers</h1>
                <form onSubmit={(event) => this.onSubmit(event)}>
                
             {/*   <FileUpload 
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
              
             */}                 

                <div className="form_devider"></div>
                               

                              <SelectListGroup
                                 type="text"
                                 placeholder="Number"
                                 name="number"
                                 error={errors.number}
                                 value={this.state.number}
                                 onChange={this.onChange}
                                 options={numbers}
                            />

                            <div>
                                 
                            {this.state.formSuccess === true ? 
                                (<div className="form_success">
                                    You have succesfully added your Message
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
    addBingoNumber
}

const mapStateToProps = (state) => ({

})
 
export default connect(mapStateToProps, actions)(InputBingo);