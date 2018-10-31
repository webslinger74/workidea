import { ADD_MANAGER_MESSAGE, GET_MANAGER_MESSAGES
} from '../types/types';


const initialState = {
 message:{}
}

const managerReducer = (state=initialState, action)=> {
switch(action.type){
case ADD_MANAGER_MESSAGE:
return {
    ...state,
    message:action.payload
}
case GET_MANAGER_MESSAGES:
return {
    ...state,
    allMessages:action.payload
 }
default:
    return state;
}
}


export default managerReducer;