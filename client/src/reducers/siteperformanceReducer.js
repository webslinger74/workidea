import { ADD_ENGAGEMENT_CATEGORY_SCORE , GET_ENGAGEMENT_CATEGORY_SCORES
} from '../types/types';


const initialState = {
 engagement:{}
}

const sitePerformanceReducer = (state=initialState, action)=> {
switch(action.type){
case ADD_ENGAGEMENT_CATEGORY_SCORE:
return {
    ...state,
    category:action.payload
}
case GET_ENGAGEMENT_CATEGORY_SCORES:
return {
    ...state,
    allCategories:action.payload
 }

default:
    return state;
}
}


export default sitePerformanceReducer;