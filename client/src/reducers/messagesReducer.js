import { ADD_MESSAGE
   } from '../types/types';


const initialState = {
    message:{}
}

const messagesReducer = (state=initialState, action)=> {
switch(action.type){
   case ADD_MESSAGE:
   return {
       ...state,
       message:action.payload
   }
   default:
       return state;
}
}


export default messagesReducer;