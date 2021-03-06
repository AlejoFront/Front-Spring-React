import {combineReducers} from 'redux'
import { authReducer } from './authReducer';
import { bookReducer } from './bookReducer';


export const rootReducer = combineReducers({
    auth: authReducer,
    books: bookReducer    
});