import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registeruser } from '../actions/userActions';
import {withRouter} from 'react-router-dom';
import TextFieldGroup from '../Inputs/TextFieldGroup';
import UserLayout from './admin/UserLayout';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      errors: {}
    };
   
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    this.props.registeruser(newUser, this.props.history);

}

componentDidMount(){
  if(this.props.auth.isAuthenticated){
    this.props.history.push('/dashboard')
  }
}

  componentWillReceiveProps(nextProps) {
      if(nextProps.errors){
        this.setState({errors:nextProps.errors})
  }}


 
  render() {

    
    const { errors } = this.state;
  

    return (
      <UserLayout>
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Admin</h1>
              <p className="lead text-center">
                Create your Admin account
              </p>
              <form onSubmit={this.onSubmit}>
                
              <TextFieldGroup 
              type="text"
              placeholder="Staff Number"
              name="name"
              error={errors.name}
              value={this.state.name}
              onChange={this.onChange}
              error={errors.name}
            />
          <TextFieldGroup 
          type="password"
          placeholder="Password"
          name="password"
          error={errors.password}
          value={this.state.password}
          onChange={this.onChange}
        />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
      </UserLayout>
    );
  }
}

const actions = {
  registeruser
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
    errors:state.errors
  }
}



export default connect(mapStateToProps, actions)(withRouter(Register));
