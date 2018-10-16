import { GET_ERRORS, ADD_MESSAGE } from '../types/types';
import axios from 'axios';

export const addMessage = (message) => (dispatch) => {
    console.log(message, "this is the message at the action");
    axios.post('/api/messages/message', message)
        .then(response => {
            console.log(response, "this is the response from axios in action")
            dispatch({
                type:ADD_MESSAGE,
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
