import { SET_CURRENT_USER,
         USER_DETAILS
        } from '../types/types';

import isEmpty from '../../../validation/is-Empty';


const initialState = {
    isAuthenticated:false,
    user: {}
}

const userReducer = (state=initialState, action)=> {
    switch(action.type){
        case SET_CURRENT_USER:
        return {
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user:action.payload
        }
        case USER_DETAILS:
        return {
            ...state,
            FullUserRecord:action.payload
        }
        default:
            return state;
    }
}


export default userReducer;