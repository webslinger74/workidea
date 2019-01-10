import { getMessages, addMessage, getMessagesByDate, getMessagesBySearch } from '../../actions/messageActions';
import { getPeg, addPeg } from '../../actions/pegActions';
import { GET_ERRORS, ADD_MESSAGE, GET_MESSAGES, GET_PEG } from '../../types/types';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

///// message action tests //////////////////////////////////////////////


describe('axios mocks', ()=> {

    beforeEach(function (){
        moxios.install()
    });
    afterEach(function(){
        moxios.uninstall();
    });

test('should get messages', () => {

    const getPostsMock = {
        message:1,
        from:"steven",
        content:"firstMessage"
    };

    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: getPostsMock,
        });

   //     console.log(request, "the request")

    })
    const middlewares = [thunk]
      const mockStore = configureStore(middlewares);
      const initialState = {}  
      const store = mockStore(initialState);
      store.getState();
      return store.dispatch(getMessages()).then(() =>{
         const actions =  store.getActions();
    //     console.log(actions, "the actions in test")
    //     console.log(store, "store");
         expect(actions[0]).toEqual({type:"GET_MESSAGES", payload:getPostsMock})
     })
       

    
});

test('it should add a message', () => {
   
    const getPostsMock2 = {
        message:2,
        from:"lucy",
        content:"secondMessage"
    };

    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: getPostsMock2,
        });

    //    console.log(request, "the request")

    })
    const push = jest.fn();
    const history = {push:push};
    const middlewares = [thunk]
    const mockStore = configureStore(middlewares);
    const initialState = {}  
    const store = mockStore(initialState);
    store.getState();
    return store.dispatch(addMessage(getPostsMock2,history)).then(() =>{
       const actions =  store.getActions();
  //     console.log(actions[0], "the actions in test2")
   //    console.log(store, "store");
       expect(actions[0]).toEqual({type:"ADD_MESSAGE", payload:getPostsMock2})
   })
})

test('it should get a message by date', () => {
    const getPostsMock3 = {
        message:3,
        from:"dave",
        content:"dateMessage"
    };

    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: getPostsMock3,
        });

    })
    const date = 123;
    const middlewares = [thunk]
    const mockStore = configureStore(middlewares);
    const initialState = {}  
    const store = mockStore(initialState);
    store.getState();
    return store.dispatch(getMessagesByDate(date)).then(() =>{
       const actions =  store.getActions();
    //   console.log(actions, "the actions in test3")
       expect(actions[0]).toEqual({type:GET_MESSAGES, payload:getPostsMock3})
   })

});

test('get message by search', () => {

  const getPostsMock4 = {
        message:4,
        from:"sally",
        content:"searchMessage"
    };

    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: getPostsMock4,
        });

    })
    const search = 100;
    const middlewares = [thunk]
    const mockStore = configureStore(middlewares);
    const initialState = {}  
    const store = mockStore(initialState);
    store.getState();
    return store.dispatch(getMessagesBySearch(search)).then(() =>{
       const actions =  store.getActions();
     //  console.log(actions, "the actions in test3")
       expect(actions[0]).toEqual({type:GET_MESSAGES, payload:getPostsMock4})
   })

});

////////////////////////// PEG ACTIONS ///////////////////////////////

test('its should get peg messages', () => {

    const getPostsMock5 = {
        message:5,
        from:"jackie",
        content:"pegMessage"
    };

    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: getPostsMock5,
        });

    })
    const middlewares = [thunk]
    const mockStore = configureStore(middlewares);
    const initialState = {}  
    const store = mockStore(initialState);
    store.getState();
    return store.dispatch(getPeg()).then(() =>{
       const actions =  store.getActions();
       expect(actions[0]).toEqual({type:GET_PEG, payload:getPostsMock5})
   })
});


test('it should add a peg message', () => {

    const getPostsMock6 = {
        message:6,
        from:"jackie",
        content:"addPegMessage"
    };

    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: getPostsMock6,
        });
    })
    const push = jest.fn();
    const history = {push:push};
    const middlewares = [thunk]
    const mockStore = configureStore(middlewares);
    const initialState = {}  
    const store = mockStore(initialState);
    store.getState();
    return store.dispatch(addPeg(getPostsMock6,history)).then(() =>{
       const actions =  store.getActions();
  //     console.log(actions[0], "the actions in test2")
   //    console.log(store, "store");
       expect(actions[0]).toEqual({type:"ADD_PEG", payload:getPostsMock6})
   })

});








}) 
