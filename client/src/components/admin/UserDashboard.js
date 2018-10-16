import React, { Component } from 'react';
import UserLayout from './UserLayout';
import MyButton from '../../Inputs/Button';
import { connect } from 'react-redux';


class UserDashboard extends Component {

    render(){
            const {auth} = this.props;
            
    return (
        <UserLayout>
        <div>
    
        <div className="user_nfo_panel">
          <h1>USER INFORMATION</h1>  
          <div>
        <span>{auth.user.name}</span>
        <span>{auth.user.lastname}</span>
        <span>{auth.user.email}</span>
        </div>
        <MyButton 
            type="default"
            title="Edit account info"
            linkTo="/user/user_profile"
         />
        </div>

        <div className="user_nfo_panel">
        <h1>Site Information</h1>
        <h4>Location: Chorlton</h4>
        <h4>Telephone Number: 0161 881 000</h4>
        <div className="user_product_block_wrapper">

                Last Login:{Date.now()}
        </div>
        </div>
        
</div>
    </UserLayout>
      )
}
}

const mapStateToProps = (state) => ({
    auth:state.auth
})
 
export default connect(mapStateToProps)(UserDashboard);