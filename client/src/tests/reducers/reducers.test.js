import { GET_ERRORS, ADD_MESSAGE, GET_MESSAGES } from '../../types/types';
import errorsReducer from '../../reducers/errorsReducer';
import messagesReducer from '../../reducers/messagesReducer';

//errors reducer tests//////////////

test('it should return get payload that is passed', () => {
    const initialState = {};
    const action = {
        type:GET_ERRORS,
        payload:'no errors'
    }
    const result = errorsReducer(initialState,action);
    expect(result).toBe('no errors');
})

test('it should return object containing error key value paid that is a string value', () => {
    const initialState = {};
    const action = {
        type:GET_ERRORS,
        payload:{
            errorsName:'You must input the name'
        }
    }
    const result = errorsReducer(initialState,action);
    expect(result).toEqual({
        errorsName:'You must input the name'
    });
})

test('it should return state unchanged when presented with uknown string as type', () => {
    const initialState = {};
    const action = {
        type:'NOT_KNOWN'
    }
    const result = errorsReducer(initialState,action);
    expect(result).toEqual(initialState);
})

//////////////////////////////////////////////////////////

//MESSAGES REDUCER TESTS




test('it should return state if action type is unknown', () => {
    const initialState = {
        message:{}
    }
    const action = {
        type:'UNKNOWN_TYPE'
    }
    const result = messagesReducer(initialState,action);
    expect(result).toEqual(initialState);
})



const allmessages = [{1:'message 1'},{2:'message 2'},{3:'message3'}];



test('it should return all messages from database', () => {
    
    const initialState = {
        message:{}
    }
  
    const action = {
        type:GET_MESSAGES,
        payload:allmessages
    }
    const result = messagesReducer(initialState,action);
    expect(result).toEqual({
        ...initialState,
        allMessages:action.payload
    })
})

test('it should return the requested message', () => {
    const initialState = {
        message:{}
    }
  
    const action = {
        type:ADD_MESSAGE,
        payload:allmessages[0]
    }
    const result = messagesReducer(initialState,action);
    expect(result).toEqual({
        ...initialState,
        message:action.payload
    })
    console.log(action.payload, "is the the 1st message??")
})
