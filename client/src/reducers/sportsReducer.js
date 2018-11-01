import { ADD_BINGO_NUMBERS
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
default:
    return state;
}
}


export default sportsReducer;