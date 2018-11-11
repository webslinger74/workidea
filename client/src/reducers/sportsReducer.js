import { ADD_BINGO_NUMBERS, GET_BINGO_NUMBERS, ADD_SPORTS_EVENT, GET_EVENTS, ADD_CHRISTMAS_PARTY, GET_CHRISTMAS_PARTY,
    GET_CELEBRATION_DAY, ADD_CELEBRATION_DAY
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
case ADD_CHRISTMAS_PARTY:
return {
    ...state,
    christmasParty:action.payload
}
case GET_CHRISTMAS_PARTY:
return {
    ...state,
    christmasParty:action.payload
}
case GET_CELEBRATION_DAY:
return {
    ...state,
    celebrationDay:action.payload
}
case ADD_CELEBRATION_DAY:
return {
    ...state,
    celebrationDay:action.payload
}
default:
    return state;
}
}


export default sportsReducer;