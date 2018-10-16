import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from '../actions/userActions';
import TextFieldGroup from '../Inputs/TextFieldGroup';
import UserLayout from './admin/UserLayout';

class Login extends Component {
constructor(){
    super();
    this.state = {
        staffnumber:"",
        password:"",
        errors: {}
    };
}

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/home')
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/home');
    }

    if(nextProps.errors){
      this.setState({
        ...this.state,
        errors:nextProps.errors
      })
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const UserData = {
      staffnumber: this.state.staffnumber,
      password: this.state.password
    };
  
  this.props.loginUser(UserData);
   
  }

    render() { 
        const {errors} = this.state;

        return (
          <UserLayout>
          <div className="container">
                  <div className="signin_wrapper">

                <form onSubmit={this.onSubmit}>
                <h1>ADMIN USER -- LOGIN</h1>
                <TextFieldGroup 
                    type="text"
                    placeholder="Staff Number"
                    name="staffnumber"
                    error={errors.staffnumber}
                    value={this.state.staffnumber}
                    onChange={this.onChange}
                  />
                     <TextFieldGroup 
                    type="password"
                    placeholder="Password"
                    name="password"
                    error={errors.password}
                    value={this.state.password}
                    onChange={this.onChange}
                  />             

                    { this.state.formError ?
                        <div className="error_label">
                            Please check your data
                        </div>
                    :null}
                  
                  <input type="submit" value="Login" />
                </form>
            </div>
</div>
                        </UserLayout>
          )
    }
}

const actions = {
  loginUser
}

const mapStateToProps = (state) => {
  return {
      auth: state.auth,
      errors:state.errors
}}


 
export default connect(mapStateToProps,actions)(Login);