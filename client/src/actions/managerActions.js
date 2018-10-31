import { ADD_MANAGER_MESSAGE, GET_ERRORS }from '../types/types';
import axios from 'axios';


export const addManagerMessage = (message) => (dispatch) => {
    axios.post('/api/manager/message', message)
    .then(response => {
        console.log(response, "this is the response from axios in action")
        dispatch({
            type:ADD_MANAGER_MESSAGE,
            payload:response.data
        })
    })
    .catch(err => {
        dispatch({
            type:GET_ERRORS,
            payload:err
        })
    })



}
