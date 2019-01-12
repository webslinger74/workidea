import { GET_ERRORS, ADD_GUIDANCE, GET_GUIDANCE } from '../types/types';
import axios from 'axios';

export const addGuidance = (guidance, history) => (dispatch) => {
   // console.log(guidance, "the score before axios request fires")
  //  console.log(typeof(guidance), "the score before axios request fires")
  return axios.post('/api/guidance/addguidance', guidance)
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

export const deleteGuidance = (id, history, url) => (dispatch) => {


//    console.log(id, "this is the id of the message???")
//    console.log(url, "the image url prior to deletion from cloudinary");
    axios.post('/api/guidance/deleteguidance', id)
    .then(response => {
        dispatch(getGuidance());
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
  return axios.get('/api/guidance/getguidance')
        .then(response => {
            console.log(response, "is this all ")
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


