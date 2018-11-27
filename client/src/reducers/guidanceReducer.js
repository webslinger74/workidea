import { ADD_GUIDANCE, GET_GUIDANCE, DELETE_GUIDANCE
} from '../types/types';


const initialState = {
 guidance:{}
}

const guidanceReducer = (state=initialState, action)=> {
switch(action.type){
case ADD_GUIDANCE:
return {
    ...state,
    guidance:action.payload
}
case GET_GUIDANCE:
return {
    ...state,
    allguidance:action.payload
 }

default:
    return state;
}
}


export default guidanceReducer;