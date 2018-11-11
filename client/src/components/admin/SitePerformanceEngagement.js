import React, { Component } from 'react';
import {connect} from 'react-redux';
import TextFieldGroup from '../../Inputs/TextFieldGroup';
import SelectListGroup from '../../Inputs/SelectListGroup';
import UserLayout from './UserLayout';
import { addEngagementCategoryScore } from '../../actions/siteperformanceActions';
import { withRouter } from 'react-router-dom';

const EngagementCats = [
    {
        "name":"Engagement Index",
        "_id":0
    }, {
        "name":"My Work",
        "_id":1
    }, {
        "name":"Organisational Objectives and Purpose",
        "_id":2
    }, {
        "name":"My Manager",
        "_id":3
    }, {
        "name":"My Team",
        "_id":4
    }, {
        "name":"Learning & Development",
        "_id":5
    }, {
        "name":"Inclusion & Fair Treatment",
        "_id":6
    }, {
        "name":"Resources & Work",
        "_id":7
    }, {
        "name":"Pay Benefits",
        "_id":8
    }, {
        "name":"Leadership & Management Change",
        "_id":9
    },
]

class SitePerformanceEngagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
                    category:'',
                    score:'',
                    diffprev:'',
                    diffparent:'',
                    diffdwp:''  ,
                    errors:[]
            }
            
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

                    if( key === "category" ){
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
          console.log(typeof(newState.category), "the type of category");
          console.log(newState, "state just before adding product");
          console.log(typeof(newState.diffDWP), "the type of category");
            console.log(typeof(newState.diffParent), "the type of category")
        this.props.addEngagementCategoryScore(newState, this.props.history);

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



    render() { 
        const {errors} = this.state;
        return (
            <UserLayout>
            <div>
                <h1>Add Site Engagement Scores</h1>
                <form onSubmit={(event) => this.onSubmit(event)}>
                <SelectListGroup 
                                             name="category"
                                             value={this.state.category}
                                             error={errors}
                                             onChange={this.onChange}
                                             options={EngagementCats}
                                             placeholder="Categories of Engagment"
                                        
                                        />
                
                <TextFieldGroup 
                                 type="text"
                                 placeholder="Score"
                                 name="score"
                                 error={errors.score}
                                 value={this.state.score}
                                 onChange={this.onChange}
                            /> 

                <TextFieldGroup 
                                 type="text"
                                 placeholder="Diff from Prev Survey"
                                 name="diffprev"
                                 error={errors.diffprev}
                                 value={this.state.diffprev}
                                 onChange={this.onChange}
                            /> 

                <TextFieldGroup 
                                 type="text"
                                 placeholder="Diff from Parent"
                                 name="diffparent"
                                 error={errors.diffparent}
                                 value={this.state.diffparent}
                                 onChange={this.onChange}
                            /> 


               <TextFieldGroup 
                                 type="text"
                                 placeholder="Diff from DWP"
                                 name="diffdwp"
                                 error={errors.diffdwp}
                                 value={this.state.diffdwp}
                                 onChange={this.onChange}
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
    addEngagementCategoryScore
}

const mapStateToProps = (state) => ({
        category:state.siteperformance.category
})
 
export default connect(mapStateToProps, actions)(withRouter(SitePerformanceEngagement));