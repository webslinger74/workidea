import { GET_ERRORS, ADD_MESSAGE, GET_MESSAGES } from '../types/types';
import axios from 'axios';

export const addMessage = (message) => (dispatch) => {
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

    console.log(date)
    let dateToSend = date;
    console.log(dateToSend)
 //   let dateToSendString = dateToSend.format();
    let dateToSendString = dateToSend
    console.log(dateToSendString, "this is the date in actions")
    console.log(typeof(dateToSendString), "this is the date in actions")
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
    console.log("oh yeah baby")
    console.log(search, "this is the search in actions")
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



