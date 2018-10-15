import React, {Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from '../actions/userActions';
import TextFieldGroup from '../Inputs/TextFieldGroup';

class Login extends Component {
constructor(){
    super();
    this.state = {
        email:"",
        password:"",
        errors: {}
    };
}

  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/dashboard')
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/user/dashboard');
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
      email: this.state.email,
      password: this.state.password
    };
  
  this.props.loginUser(UserData);
   
  }

    render() { 
        const {errors} = this.state;

        return (
          <div className="page_wrapper">
          <div className="container">
                  <div className="signin_wrapper">

                <form onSubmit={this.onSubmit}>
                <h1>LOGIN WITH YOUR DETAILS</h1>
                <TextFieldGroup 
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    error={errors.email}
                    value={this.state.email}
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
                  
                  <input type="submit" className="btn btn-info btn-block mt-4" />
                </form>
            </div>
</div>
</div>
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