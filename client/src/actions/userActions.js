import { USER_DETAILS, SET_CURRENT_USER, GET_ERRORS } from '../types/types';
import axios from 'axios';


export const loginUser = (UserData) => (dispatch) => {
        //axios request to check if user is valid user and password
        // if valid then we need to dispatch to user reducer current user details
        // if not valid need to dispatch error to error reducer

        console.log("here we go", UserData)
        axios.post('/api/users/login', UserData)
            .then(response =>  {
                  const { token } = res.data;
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