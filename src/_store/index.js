import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as treasure from './treasure/reducer';
import * as mine from './mine/reducer';
import * as discounts from './discounts/reducer';
import * as home from './home/reducer';
import * as common from './common/reducer';

let store = createStore(
    combineReducers({
        ...treasure,
        ...mine,
        ...discounts,
        ...home,
        ...common
    }),
    applyMiddleware(thunk)
);
export default store;