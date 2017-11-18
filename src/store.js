import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { analyticsReducer } from './reducers/reducer';

export default createStore(analyticsReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk));


