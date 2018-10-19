import { ADD_MESSAGE, GET_MESSAGES
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
   case GET_MESSAGES:
   return {
       ...state,
       allMessages:action.payload
    }
   
   default:
       return state;
}
}


export default messagesReducer;