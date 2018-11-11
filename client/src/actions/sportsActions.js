import { ADD_BINGO_NUMBERS, GET_BINGO_NUMBERS,
         GET_ERRORS, ADD_SPORTS_EVENT, GET_EVENTS, 
         ADD_CHRISTMAS_PARTY, GET_CHRISTMAS_PARTY }from '../types/types';

import axios from 'axios';


export const addBingoNumber = (number) => (dispatch) => {
    axios.post('/api/sports/bingo', number)
    .then(response => {
        console.log(response, "this is the response from axios in action is it bingo number")
        dispatch({
            type:ADD_BINGO_NUMBERS,
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

export const getBingoNumbers = () => (dispatch) => {
    axios.get('/api/sports/bingo')
        .then(response => {
            console.log(response, "the response from get bingo numbers");
            dispatch({
                type:GET_BINGO_NUMBERS,
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

export const addSportsEvent = (event) => (dispatch) => {
    axios.post('/api/sports/event', event)
        .then(response => {
            dispatch({
                type:ADD_SPORTS_EVENT,
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

export const addChristmasParty = (party) => (dispatch) => {
    axios.post('/api/sports/christmasparty', party)
        .then(response => {
            dispatch({
                type:ADD_CHRISTMAS_PARTY,
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
export const getChristmasParty = () => (dispatch) => {
    axios.get('/api/sports/christmasparty')
       
        .then(response => {
            console.log(response, "is this all the events???")
            dispatch({
                type:GET_CHRISTMAS_PARTY,
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

export const deleteEvent = (id, history) => (dispatch) => {

    console.log(history, "the history")
    console.log(id, "this is the id of the message???")
    axios.post('/api/sports/deleteEvent', id)
    .then(response => {
        dispatch(getEvents());
    })
    .catch(err => {
        dispatch({
            type:GET_ERRORS,
            payload:err
        })
    })

}


export const getEvents = () => (dispatch) => {
    axios.get('/api/sports/events')
       
        .then(response => {
            console.log(response, "is this all the events???")
            dispatch({
                type:GET_EVENTS,
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