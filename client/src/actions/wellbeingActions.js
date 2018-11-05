import { GET_ERRORS, ADD_WELLBEING_EVENT, GET_WELLBEING_EVENTS } from '../types/types';
import axios from 'axios';


export const addWellBeingEvent = (event) => (dispatch) => {
    console.log(event, "the event");
    axios.post('/api/wellbeing/event', event)
       
        .then(response => {
            console.log(response, "this is the response from axios in action")
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

export const getWellBeingEvents = () => (dispatch) => {
    axios.get('/api/wellbeing/events')       
        .then(response => {
            console.log(response, "is this all the events???")
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