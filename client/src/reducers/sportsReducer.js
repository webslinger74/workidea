import { ADD_BINGO_NUMBERS, GET_BINGO_NUMBERS, ADD_SPORTS_EVENT, GET_EVENTS
} from '../types/types';


const initialState = {
 sports:{}
}

const sportsReducer = (state=initialState, action)=> {
switch(action.type){
case ADD_BINGO_NUMBERS:
return {
    ...state,
    bingo:action.payload
}
case GET_BINGO_NUMBERS:
return {
    ...state,
    bingoNumbers:action.payload
}
case ADD_SPORTS_EVENT:
return {
    ...state,
    event:action.payload
}
case GET_EVENTS:
return {
    ...state,
    events:action.payload
}
default:
    return state;
}
}


export default sportsReducer;