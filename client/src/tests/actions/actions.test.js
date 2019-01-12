import { getMessages, addMessage, getMessagesByDate, getMessagesBySearch } from '../../actions/messageActions';
import { getPeg, addPeg } from '../../actions/pegActions';
import { addGuidance, getGuidance } from '../../actions/guidanceActions';
import { getEvents, addSportsEvent } from '../../actions/sportsActions';
import { addManagerMessage, getManagerMessages } from '../../actions/managerActions';
import { GET_ERRORS, ADD_MESSAGE, GET_MESSAGES, GET_PEG,ADD_PEG, ADD_MANAGER_MESSAGE,
     ADD_SPORTS_EVENT, ADD_GUIDANCE, GET_GUIDANCE, GET_EVENTS, GET_MANAGER_MESSAGES } from '../../types/types';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';




describe('axios mocks', ()=> {

    beforeEach(function (){
        moxios.install()
    });
    afterEach(function(){
        moxios.uninstall();
    });

    const push = jest.fn();
    const history = {push:push}; 


    /////sports actions/////////////////////////////////////////////////////////////////////
    test('it should get the sport events/messages', () => {

        const getPostsMock9 = {
            message:9,
            from:"Ian",
            content:"getSportsMessages"
        };
    
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 200,
              response: getPostsMock9,
            });
    
       //     console.log(request, "the request")
    
        })
        const middlewares = [thunk];
          const mockStore = configureStore(middlewares);
          const initialState = {} 
          const store = mockStore(initialState);
         return store.dispatch(getEvents()).then(() =>{
             const actions =  store.getActions();
        //     console.log(actions, "the actions in test")
        //     console.log(store, "store");
             expect(actions[0]).toEqual({type:GET_EVENTS, payload:getPostsMock9})
         });
    
    });

    test('it should add sport event', () => {
        const getPostsMock11 = {
            message:11,
            from:"Jack",
            content:"addSportsMessages"
        };
    
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 200,
              response: getPostsMock11,
            });
    
         })
        const middlewares = [thunk];
          const mockStore = configureStore(middlewares);
          const initialState = {} 
          const store = mockStore(initialState);
          return store.dispatch(addSportsEvent(getPostsMock11,history)).then(() =>{
             const actions =  store.getActions(); // get actions has the calls made to the mock call
             expect(actions[0]).toEqual({type:ADD_SPORTS_EVENT, payload:getPostsMock11})
         });
    
    })

    ///// message action tests //////////////////////////////////////////////

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

    })
    const middlewares = [thunk]
      const mockStore = configureStore(middlewares);
      const initialState = {}  
      const store = mockStore(initialState);
      store.getState();
      store.clearActions();
      return store.dispatch(getMessages()).then(() =>{
         const actions =  store.getActions();
         expect(actions[0]).toEqual({type:GET_MESSAGES, payload:getPostsMock})
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

    })
    const middlewares = [thunk]
    const mockStore = configureStore(middlewares);
    const initialState = {}  
    const store = mockStore(initialState);
    store.getState();
    return store.dispatch(addMessage(getPostsMock2,history)).then(() =>{
       const actions =  store.getActions();
  //     console.log(actions[0], "the actions in test2")
   //    console.log(store, "store");
       expect(actions[0]).toEqual({type:ADD_MESSAGE, payload:getPostsMock2})
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
    const middlewares = [thunk]
    const mockStore = configureStore(middlewares);
    const initialState = {}  
    const store = mockStore(initialState);
    store.getState();
    return store.dispatch(addPeg(getPostsMock6,history)).then(() =>{
       const actions =  store.getActions();
       expect(actions[0]).toEqual({type:ADD_PEG, payload:getPostsMock6})
   })

});

///////////////////////// guidance actions //////////////////////////////////////////

test('it should add guidance message', () => {
    const getPostsMock7 = {
        message:7,
        from:"Martin",
        content:"addGuidanceMessage"
    };

    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: getPostsMock7,
        });

    })
    const middlewares = [thunk]
      const mockStore = configureStore(middlewares);
      const initialState = {} 
      const store = mockStore(initialState);
      return store.dispatch(addGuidance(getPostsMock7, history)).then(() =>{
         const actions =  store.getActions();
         expect(actions[0]).toEqual({type:ADD_GUIDANCE, payload:getPostsMock7})
     })

    });
       
test('it should get the guidance messages', () => {
    const getPostsMock8 = {
        message:8,
        from:"Janet",
        content:"getGuidanceMessages"
    };

    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: getPostsMock8,
        });

    })
      const middlewares = [thunk];
      const mockStore = configureStore(middlewares);
      const initialState = {} 
      const store = mockStore(initialState);
      store.dispatch(getGuidance()).then(() =>{
         const actions =  store.getActions();
         expect(actions[0]).toEqual({type:GET_GUIDANCE, payload:getPostsMock8})
     })
});



////// manager actions /////////////////////////////////////////////


test('it should add a manager message',() => {
    const getPostsMock12 = {
        message:12,
        from:"Jane",
        content:"addManagerMessage"
    };

    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: getPostsMock12,
        });

   //     console.log(request, "the request")

    })
      const middlewares = [thunk];
      const mockStore = configureStore(middlewares);
      const initialState = {} 
      const store = mockStore(initialState);
    

      store.dispatch(addManagerMessage(getPostsMock12,history)).then(() =>{
         const actions =  store.getActions();
         expect(actions[0]).toEqual({type:ADD_MANAGER_MESSAGE, payload:getPostsMock12})
     })
})
test('it should get the manager messages', () => {
    const getPostsMock13 = {
        message:13,
        from:"Trevor",
        content:"getManagerMessage"
    };

    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: getPostsMock13,
        });

    })
      const middlewares = [thunk];
      const mockStore = configureStore(middlewares);
      const initialState = {} 
      const store = mockStore(initialState); 

      store.dispatch(getManagerMessages()).then(() =>{
         const actions =  store.getActions();
         expect(actions[0]).toEqual({type:GET_MANAGER_MESSAGES, payload:getPostsMock13})
     })
})

})


