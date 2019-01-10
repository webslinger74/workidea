import { GET_ERRORS, ADD_MESSAGE, GET_MESSAGES, ADD_GUIDANCE, GET_GUIDANCE, ADD_PEG, GET_PEG,
            GET_MANAGER_MESSAGES, ADD_MANAGER_MESSAGE } from '../../types/types';
import errorsReducer from '../../reducers/errorsReducer';
import messagesReducer from '../../reducers/messagesReducer';
import guidanceReducer from '../../reducers/guidanceReducer';
import pegReducer from '../../reducers/pegReducer';
import managerReducer from '../../reducers/managerReducer';

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
  //  console.log(action.payload, "is the the 1st message??")
})


////////////////  guidance reducers tests   ////////////////////////////////////////


test('it should return initalstate', () => {
    const initialstate = {guidance:{}};
    const action = {
        type:"UNDEFINED",
        payload:initialstate
    }

    const guidance = guidanceReducer(initialstate, action);
    expect(guidance).toEqual({guidance:{}});
});

test('it should add guidance', ()=> {
    const initialState = {guidance:{}};
    const guidanceToAdd = {
        message:1,
        sender:"steven",
        topic:"new guidance"
    }
    const action = {
        type:ADD_GUIDANCE,
        payload:guidanceToAdd
    }
    const guidanceAdded = guidanceReducer(initialState, action);
    expect(guidanceAdded).toEqual({
        guidance:guidanceToAdd
    })
});

test('it should get the guidance currently held', () => {
    const initialState = {guidance:{}};
    const AllGuidanceAdded = [
        {
        message:1,
        sender:"steven",
        topic:"new guidance"
    }, {
        message:2,
        sender:"lucy",
        topic:"old guidance"
    }, {
        message:3,
        sender:"hannah",
        topic:"secret guiance"
    }]; 
    const action = {
        type:GET_GUIDANCE,
        payload:AllGuidanceAdded
    }
    
    const returnedGuidance = guidanceReducer(initialState,action);
    expect(returnedGuidance).toEqual({
        allGuidance:AllGuidanceAdded,
        guidance:{}
    });
})


//////////////// Peg Reducers ////////////////////////////////////////////

test('it should return initial state', ()=> {
    const initialState = {
        peg:{}
    }
    const action = {
        type:"UNDEFINED",
        payload:initialState
    }
    const returned = pegReducer(initialState,action);
    expect(returned).toEqual({
        peg:{}
    });
});

test('it should add peg message', ()=> {
    const initialState = {
        peg:{}
    }
    const pegMessage = {
        message:1,
        sender:"steven",
        content:"new peg events to come"
    }
    const action = {
        type:ADD_PEG,
        payload:pegMessage
    }
    const returnedPegMessage = pegReducer(initialState,action);
        expect(returnedPegMessage).toEqual({
            peg:{},
            pegEvent:action.payload
        })
});

test('it should return peg events', () => {
    const initalstate = {
        peg:{}
    }
    const pegMessages = [
        {
            message:1,
            sender:"steven",
            content:"new peg events to come"
        },{
            message:2,
            sender:"lucy",
            content:"older peg events deleted"
        }
    ]
    const action = {
        type:GET_PEG,
        payload:pegMessages
    }
    const returnedPegMessages = pegReducer(initalstate, action);
    expect(returnedPegMessages).toEqual({
        peg:{},
        pegEvents:action.payload
    })
});

//////////////// Manager Reducer tests ///////////////////////////////////////////////////

test('it should return initial state', ()=> {
    const initialState = {
        message:{}
    }
    const action = {
        type:"UNDEFINED",
        payload:initialState
    }
    const returned = managerReducer(initialState,action);
    expect(returned).toEqual({
        message:{}
    });
});

test('it should add peg message', ()=> {
    const initialState = {
        message:{}
    }
    const managerMessage = {
        message:1,
        sender:"steven",
        content:"new manager message events to come"
    }
    const action = {
        type:ADD_MANAGER_MESSAGE,
        payload:managerMessage
    }
    const returnedManagerMessage = managerReducer(initialState,action);
        expect(returnedManagerMessage).toEqual({
            message:action.payload
        })
});

test('it should return peg events', () => {
    const initalstate = {
        message:{}
    }
    const managerMessages = [
        {
            message:1,
            sender:"steven",
            content:"new manager events to come"
        },{
            message:2,
            sender:"lucy",
            content:"older manager events deleted"
        }
    ]
    const action = {
        type:GET_MANAGER_MESSAGES,
        payload:managerMessages
    }
    const returnedManagerMessages = managerReducer(initalstate, action);
    expect(returnedManagerMessages).toEqual({
        message:{},
        allMessages:action.payload
    })
});

//// Sports Reducer tests /////////////////////////////////////////////////////////
