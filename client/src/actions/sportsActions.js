import { ADD_BINGO_NUMBERS, GET_BINGO_NUMBERS, GET_ERRORS }from '../types/types';
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