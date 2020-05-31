import { combineReducers } from "redux";
import {
  RECEIVE_PATIENTS_SUCCESS,
  RECEIVE_PATIENTS_FAIL,
  ADD_PATIENT_SUCCESS,
  ADD_PATIENT_FAIL,
  RESET_PATIENTS
} from "../actionTypes";

const initialPatient = {};
function patient(state = initialPatient, action) {
  switch (action.type) { 
    case ADD_PATIENT_SUCCESS:
      return action.result
    case ADD_PATIENT_FAIL:
      return action.result   
    default:
      return state;
  }
}

const initialPatients = [];
const patients = (state = initialPatients, action) => {
  switch (action.type) {
    case RECEIVE_PATIENTS_SUCCESS:
      return action.patients;
    case RECEIVE_PATIENTS_FAIL:
      return [];
    case RESET_PATIENTS:
      return [];  
    default:
      return state;
  }
};

export default combineReducers({
  patients,
  patient
});
