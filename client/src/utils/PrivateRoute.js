import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component, auth, ...rest}) => (
    <Route  
        {...rest}
        render = {props =>
        auth.isAuthenticated === true ? (
            <Component {...props} />
        )
: ( <Redirect to="/register_login" />
    )}
    />
);      


const mapStateToProps = (state) => {
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps)(PrivateRoute);