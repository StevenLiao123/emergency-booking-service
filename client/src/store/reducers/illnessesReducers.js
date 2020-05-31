import { combineReducers } from 'redux';
import { RECEIVE_ILLNESSES_SUCCESS, RECEIVE_ILLNESSES_FAIL } from '../actionTypes';

const initialIllnesses = [];
const illnesses = (state = initialIllnesses, action) => {
    switch(action.type) {
        case RECEIVE_ILLNESSES_SUCCESS:
            return action.illnesses;
        case RECEIVE_ILLNESSES_FAIL:
            return [];
        default:
            return state;    
    }
}

export default combineReducers({
    illnesses
});