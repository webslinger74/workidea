import { ADD_WELLBEING_EVENT, GET_WELLBEING_EVENTS
} from '../types/types';


const initialState = {
 wellbeing:{}
}

const wellbeingReducer = (state=initialState, action)=> {
switch(action.type){
case ADD_WELLBEING_EVENT:
return {
    ...state,
    wellbeingEvent:action.payload
}
case GET_WELLBEING_EVENTS:
return {
    ...state,
    allEvents:action.payload
 }

default:
    return state;
}
}


export default wellbeingReducer;