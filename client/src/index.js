import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import '../public/resources/css/styles.css';  //THIS IS THE CSS LOCAL FILE!!!!!!!!!!!
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { combineReducers, compose} from 'redux';
//import authReducer from '../src/reducers/authReducer';
import errorsReducer from '../src/reducers/errorsReducer';
import userReducer from '../src/reducers/user_reducer';
import messagesReducer from '../src/reducers/messagesReducer';

const initialState = {};
const rootReducers = combineReducers({
          auth: userReducer,
          errors: errorsReducer,
          messages:messagesReducer
})

const middleware = [thunk];

const store = createStore(
                        rootReducers,
                        initialState,
                        compose(
                            applyMiddleware(...middleware),
                            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                        )
                        );


ReactDOM.render(
        <Provider store={ store }>
                 <BrowserRouter>
                         <Routes />
                 </BrowserRouter>
        </Provider>
, document.getElementById('root'));