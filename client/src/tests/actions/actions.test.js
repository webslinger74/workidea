import * as messageActions from '../../actions/messageActions';
import nock from 'nock';
import { GET_ERRORS, ADD_MESSAGE, GET_MESSAGES } from '../../types/types';
import configureMockStore from 'redux-mock-store';
import thunkMiddleWare from 'redux-thunk';
import axios from 'axios';
const mockStore = configureMockStore([thunkMiddleWare]);



it('should return the messages', ()=> {
    /*
    const response = {data: [{message:'message one is here!'}]};
      axios.get.mockResolvedValue(response);  
      
      const store = mockStore();
      const stfun = store.dispatch();
      const result = messageActions.getMessages(); 
      const myMockFn = jest.fn(stfun); 
      expect(result).toEqual(myMockFn);
      */
})



it('should add a message', ()=> {
    const message = 'This is the test message';
    
})



 
