import { GET_ERRORS, ADD_GUIDANCE, GET_GUIDANCE } from '../types/types';
import axios from 'axios';

export const addGuidance = (guidance, history) => (dispatch) => {
    console.log(guidance, "the score before axios request fires")
    console.log(typeof(guidance), "the score before axios request fires")
    axios.post('/api/guidance/addguidance', guidance)
        .then(response => {
            console.log(response, "this is the response from axios in action")
            dispatch({
                type:ADD_GUIDANCE,
                payload:response.data
            })
            history.push('/guidance')
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

export const deleteGuidance = (id, url) => (dispatch) => {


    console.log(id, "this is the id of the message???")
    console.log(url, "the image url prior to deletion from cloudinary");
    axios.post('/api/messages/deletemessage', id)
    .then(response => {
        dispatch(getMessages());
    }) 

    url.forEach(element => {
        axios.get(`/api/users/removeimage?public_id=${element.public_id}`)
        .then((response) => {
            console.log("image deleted from cloudinary", url);
            })
            .catch(err => {
                dispatch({
                    type:GET_ERRORS,
                    payload:err
                })
            })
    });

}


export const getGuidance = () => (dispatch) => {
    axios.get('/api/guidance/getguidance')
       
        .then(response => {
            console.log(response, "is this all the messages???")
            dispatch({
                type:GET_GUIDANCE,
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



