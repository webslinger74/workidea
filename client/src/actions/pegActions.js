import { GET_ERRORS, ADD_PEG, GET_PEG } from '../types/types';
import axios from 'axios';

export const addPeg = (peg, history) => (dispatch) => {
    console.log(peg, "the score before axios request fires")
    console.log(typeof(peg), "the score before axios request fires")
   return axios.post('/api/peg/addPegEvent', peg)
        .then(response => {
          //  console.log(response, "this is the response from axios in action")
            dispatch({
                type:ADD_PEG,
                payload:response.data
            })
            history.push('/peg')
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

export const deletePeg = (id, history, url) => (dispatch) => {


//    console.log(id, "this is the id of the message???")
  //  console.log(url, "the image url prior to deletion from cloudinary");
    axios.post('/api/peg/deletePeg', id)
    .then(response => {
        dispatch(getPeg());
    }) 

    url.forEach(element => {
        axios.get(`/api/users/removeimage?public_id=${element.public_id}`)
        .then((response) => {
      //      console.log("image deleted from cloudinary", url);
            })
            .catch(err => {
                dispatch({
                    type:GET_ERRORS,
                    payload:err
                })
            })
    });

}


export const getPeg = () => (dispatch) => {
    return axios.get('/api/peg/getPeg')
        .then(response => {
       //     console.log(response, "is this all ")
            dispatch({
                type:GET_PEG,
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


