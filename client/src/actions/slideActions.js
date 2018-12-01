import { GET_ERRORS, ADD_SLIDE, GET_SLIDES } from '../types/types';
import axios from 'axios';

export const addSlide = (slide, history) => (dispatch) => {
    console.log(slide, "the score before axios request fires")
    console.log(typeof(slide), "the score before axios request fires")
    axios.post('/api/slide/addslide', slide)
        .then(response => {
            console.log(response, "this is the response from axios in action")
            dispatch({
                type:ADD_SLIDE,
                payload:response.data
            })
            history.push('/')
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

export const deleteMessage = (id, url) => (dispatch) => {


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


export const getSlides = () => (dispatch) => {
    axios.get('/api/slide/getSlides')
       
        .then(response => {
            console.log(response, "is this all the messages???")
            dispatch({
                type:GET_SLIDES,
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






