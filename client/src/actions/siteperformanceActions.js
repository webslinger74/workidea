import { GET_ERRORS, ADD_ENGAGEMENT_CATEGORY_SCORE, GET_ENGAGEMENT_CATEGORY_SCORES } from '../types/types';
import axios from 'axios';

export const addEngagementCategoryScore = (score, history) => (dispatch) => {
    console.log(score, "the score before axios request fires")
    console.log(typeof(score), "the score before axios request fires")
    axios.post('/api/site/engage', score)
        .then(response => {
            console.log(response, "this is the response from axios in action - engage cat")
            dispatch({
                type:ADD_ENGAGEMENT_CATEGORY_SCORE,
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

export const deleteCategory = (categoryId) => (dispatch) => {
            axios.post('/api/site/engagecategory', categoryId)
                .then(response => {
                    dispatch(getEngagementCategoryScores());
                })
                .catch(err => {
                    dispatch({
                        type:GET_ERRORS,
                        payload:err
                    })
                })
}


export const getEngagementCategoryScores = () => (dispatch) => {
    axios.get('/api/site/engage')
       
        .then(response => {
            console.log(response, "is this all the engagement cats???")
            dispatch({
                type:GET_ENGAGEMENT_CATEGORY_SCORES,
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






