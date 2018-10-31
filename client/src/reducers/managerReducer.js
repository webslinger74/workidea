import { ADD_MANAGER_MESSAGE
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
default:
    return state;
}
}


export default managerReducer;