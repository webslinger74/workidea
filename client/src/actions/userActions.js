import { USER_DETAILS, SET_CURRENT_USER, GET_ERRORS, CLEAR_USER_DETAILS } from '../types/types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

export const registeruser = (userData, history) => (dispatch) => {           
          
    axios
      .post('api/users/register', userData)
      .then(res => { 
      //  console.log(res.data)
        history.push('/login')})
        .catch((err) => {
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        
})
};

export const loginUser = (UserData) => (dispatch) => {
        //axios request to check if user is valid user and password
        // if valid then we need to dispatch to user reducer current user details
        // if not valid need to dispatch error to error reducer

        axios.post('/api/users/login', UserData)
            .then(response =>  {
                  const { token } = response.data;
                localStorage.setItem('jwtToken', token);
                //put token in axios request headers
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(userDetails());
                //set current user
                dispatch(setCurrentUser(decoded));
                dispatch({
                    type:GET_ERRORS,
                    payload:{}
                })
                })          
            .catch((err) => {
                console.log(err, "the error");
                dispatch({
                    type:GET_ERRORS,
                    payload:err.response.data
                })
            });
        
}
export const userDetails = () =>  (dispatch) => {
    axios.get('/api/users/current')
    .then(res => {
        console.log(res, "this is the full details");
        dispatch({
            type:USER_DETAILS,
            payload:res.data
        })
    }) 
    .catch(err => {
        console.log(err);
    })
};
//set loggin user

export const setCurrentUser = (decoded) => {
    return {
        type:SET_CURRENT_USER,
        payload:decoded
    }
};

export const logoutUser = (history) => (dispatch) => {
    
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
     dispatch(setCurrentUser({}));
      dispatch(clearUserDetails());
    history.push('/');


}

export const clearUserDetails = () => {
    return {
        type:CLEAR_USER_DETAILS,
        payload:{}
    }
}

