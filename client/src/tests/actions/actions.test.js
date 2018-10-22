import * as messageActions from '../../actions/messageActions';
import nock from 'nock';
import { GET_ERRORS, ADD_MESSAGE, GET_MESSAGES } from '../../types/types';
import configureMockStore from 'redux-mock-store';
import thunkMiddleWare from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleWare]);



it('should return the messages', ()=> {


    const store = mockStore();
    

 ///   messageActions.getMessages()
})



it('should add a message', ()=> {
    const message = 'This is the test message';
    
})



 
