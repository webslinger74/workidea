import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import 'react-quill/dist/quill.snow.css';
//import '../public/resources/css/styles.css';  //THIS IS THE CSS LOCAL FILE!!!!!!!!!!!
import '../public/resources/css/style.scss';  //This is start of Scss file
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { combineReducers, compose} from 'redux';
//import authReducer from '../src/reducers/authReducer';
import errorsReducer from '../src/reducers/errorsReducer';
import userReducer from '../src/reducers/user_reducer';
import messagesReducer from '../src/reducers/messagesReducer';
import managerReducer from '../src/reducers/managerReducer';
import sportsReducer from './reducers/sportsReducer';
import wellbeingReducer from './reducers/wellbeingReducer';
import sitePerformanceReducer from './reducers/siteperformanceReducer';
import guidanceReducer from './reducers/guidanceReducer';
import pegReducer from './reducers/pegReducer';
import ScrollToTop from './utils/ScrollToTop';
import slideReducer from './reducers/slideReducer';

const initialState = {};
const rootReducers = combineReducers({
          auth: userReducer,
          errors: errorsReducer,
          messages:messagesReducer,
          manager:managerReducer,
          sports:sportsReducer,
          wellbeing:wellbeingReducer,
          siteperformance:sitePerformanceReducer,
          guidance:guidanceReducer,
          peg:pegReducer,
          slide:slideReducer
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
                         <ScrollToTop>
                                  <Routes />
                         </ScrollToTop>
                 </BrowserRouter>
        </Provider>
, document.getElementById('root'));