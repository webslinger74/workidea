import { ADD_SLIDE, GET_SLIDES
} from '../types/types';


const initialState = {
 slide:{}
}

const slideReducer = (state=initialState, action)=> {
switch(action.type){
case ADD_SLIDE:
return {
    ...state,
    slide:action.payload
}
case GET_SLIDES:
return {
    ...state,
    slides:action.payload
}
default:
    return state;
}
}


export default slideReducer;