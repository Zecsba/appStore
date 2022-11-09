import { createStore, combineReducers } from 'redux';
import { producReducer, categoryReducer } from './reducers';

const rootReducer = combineReducers({
    products: producReducer,
    category: categoryReducer
});

export default createStore(rootReducer);