import { ADD_MANAGER_MESSAGE, GET_ERRORS, GET_MANAGER_MESSAGES }from '../types/types';
import axios from 'axios';


export const addManagerMessage = (message, history) => (dispatch) => {
    axios.post('/api/manager/message', message)
    .then(response => {
        console.log(response, "this is the response from axios in action")
        dispatch({
            type:ADD_MANAGER_MESSAGE,
            payload:response.data
        })
        history.push('/manager');
    })
    .catch(err => {
        dispatch({
            type:GET_ERRORS,
            payload:err
        })
    })

}

export const deleteMessage = (id, url) => (dispatch) => {

    axios.post('/api/manager/deletemessage', id)
         .then((response) => {
                dispatch(getManagerMessages())
         })
         url.forEach(element => {
            axios.get(`/api/users/removeimage?public_id=${element.public_id}`)
            .then((response) => {
                })
                .catch(err => {
                    dispatch({
                        type:GET_ERRORS,
                        payload:err
                    })
                })
        })
   }

export const getManagerMessages = () => (dispatch) => {
    axios.get('/api/manager/messages')
       
        .then(response => {
            console.log(response, "is this all the messages???")
            dispatch({
                type:GET_MANAGER_MESSAGES,
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