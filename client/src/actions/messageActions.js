import { GET_ERRORS, ADD_MESSAGE, GET_MESSAGES } from '../types/types';
import axios from 'axios';
import { array } from 'prop-types';

export const addMessage = (message, history) => (dispatch) => {
    return axios.post('/api/messages/message', message)
        .then(response => {
     //       console.log(response, "this is the response from axios in action")
            dispatch({
                type:ADD_MESSAGE,
                payload:response.data
            })
            history.push('/messageboard')
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        })
}

export const deleteMessage = (id, url) => (dispatch) => {

    url.forEach(element => {
        axios.get(`/api/users/removeimage?public_id=${element.public_id}`)
        .then((response) => {
          //  console.log("image deleted from cloudinary", url);
            })
            .catch(err => {
                dispatch({
                    type:GET_ERRORS,
                    payload:err
                })
            })
    });

    return axios.post('/api/messages/deletemessage', id)
    .then(response => {
    
        dispatch(getMessages());
    }) 
    .catch(err => {
        dispatch({
            type:GET_ERRORS,
            payload:err
        })
    })

}


export const getMessages = () => (dispatch) => {
    return axios.get('/api/messages/messages')
       
        .then(response => {
         //   console.log(response, "is this all the messages???")
            dispatch({
                type:GET_MESSAGES,
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

export const getMessagesByDate = (date) => (dispatch) => {
    let dateToSend = date;
    let dateToSendString = dateToSend
    return axios.post('/api/messages/messagesByDate', {searchdate:dateToSendString})
       
        .then(response => {
            console.log(response, "is this all the messages???")
            dispatch({
                type:GET_MESSAGES,
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

export const getMessagesBySearch = (search) => (dispatch) => {
    return axios.post('/api/messages/messagesBySearch', {searchString:search})
    .then(response => {
     //   console.log(response, "is this all the messages???")
        dispatch({
            type:GET_MESSAGES,
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



