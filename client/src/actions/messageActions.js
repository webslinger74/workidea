import { GET_ERRORS, ADD_MESSAGE, GET_MESSAGES, DELETE_MESSAGE } from '../types/types';
import axios from 'axios';

export const addMessage = (message) => (dispatch) => {
    console.log(message, "the score before axios request fires")
    console.log(typeof(message), "the score before axios request fires")
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

export const deleteMessage = (id) => (dispatch) => {


    console.log(id, "this is the id of the message???")
    axios.post('/api/messages/deletemessage', id)
    .then(response => {
        console.log(response, "this is the response from axios in action")
        dispatch(getMessages())
    }) 
    .catch(err => {
        dispatch({
            type:GET_ERRORS,
            payload:err
        })
    })
}



export const getMessages = () => (dispatch) => {
    axios.get('/api/messages/messages')
       
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
export const getMessagesByDate = (date) => (dispatch) => {
    let dateToSend = date;
    let dateToSendString = dateToSend
    axios.post('/api/messages/messagesByDate', {searchdate:dateToSendString})
       
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
    axios.post('/api/messages/messagesBySearch', {searchString:search})
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



