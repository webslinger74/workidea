import { ADD_PEG, GET_PEG, DELETE_GUIDANCE
} from '../types/types';


const initialState = {
 peg:{}
}

const pegReducer = (state=initialState, action)=> {
switch(action.type){
case ADD_PEG:
return {
    ...state,
    pegEvent:action.payload
}
case GET_PEG:
return {
    ...state,
    pegEvents:action.payload
 }

default:
    return state;
}
}


export default pegReducer;