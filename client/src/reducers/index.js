import {combineReducers} from 'redux';
import authreducer from './authReducers';

export default combineReducers({
    auth:authreducer
});