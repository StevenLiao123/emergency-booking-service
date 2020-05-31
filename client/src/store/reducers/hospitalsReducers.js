import { combineReducers } from 'redux';
import { RECEIVE_HOSPITALS_SUCCESS, RECEIVE_HOSPITALS_FAIL, RESET_HOSPITALS } from '../actionTypes';

const initialHospitals = [];
const hospitals = (state = initialHospitals, action) => {
    switch(action.type) {
        case RECEIVE_HOSPITALS_SUCCESS:
            return action.hospitals;
        case RECEIVE_HOSPITALS_FAIL:
            return [];
        case RESET_HOSPITALS:
            return [];    
        default:
            return state;    
    }
}

export default combineReducers({
    hospitals
});