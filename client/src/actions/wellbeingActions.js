import { GET_ERRORS, ADD_WELLBEING_EVENT, GET_WELLBEING_EVENTS } from '../types/types';
import axios from 'axios';


export const addWellBeingEvent = (event) => (dispatch) => {
    axios.post('/api/wellbeing/event', event)
       
        .then(response => {
            dispatch({
                type:ADD_WELLBEING_EVENT,
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

export const deleteEvent = (id) => (dispatch) => {

    axios.post('/api/wellbeing/deleteEvent', id)
    .then(response => {
        dispatch(getWellBeingEvents())
    }) 
    .catch(err => {
        dispatch({
            type:GET_ERRORS,
            payload:err
        })
    })
}

export const getWellBeingEvents = () => (dispatch) => {
    axios.get('/api/wellbeing/events')       
        .then(response => {
            dispatch({
                type:GET_WELLBEING_EVENTS,
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