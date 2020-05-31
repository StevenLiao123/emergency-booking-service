import { combineReducers } from "redux";
import {
  SET_PATIENT_SELECTED_ILLNESS_NAME,
  SET_PATIENT_SELECTED_HOSPITAL_NAME,
  SET_PATIENT_SELECTED_HOSPITAL_AVERAGE_PROCESS_TIME,
  SET_PATIENT_SELECTED_HOSPITAL_WAITING_LIST,
  SET_PATIENT_SELECTED_HOSPITAL_WAITING_TIME,
  SET_PATIENT_SELECTED_LEVEL_OF_PAIN,
  RESET_PATIENT
} from "../actionTypes";

const initialIllnessName = "";
const illnessName = (state = initialIllnessName, action) => {
  switch (action.type) {
    case SET_PATIENT_SELECTED_ILLNESS_NAME:
      return action.illnessName;
    case RESET_PATIENT:
      return "";  
    default:
      return state;
  }
};

const initialHospitalName = "";
const hospitalName = (state = initialHospitalName, action) => {
  switch (action.type) {
    case SET_PATIENT_SELECTED_HOSPITAL_NAME:
      return action.hospitalName;
    case RESET_PATIENT:
      return "";    
    default:
      return state;
  }
};

const initialHospitalAvgProcessTime = 0;
const hospitalAvgProcessTime = (state = initialHospitalAvgProcessTime, action) => {
  switch (action.type) {
    case SET_PATIENT_SELECTED_HOSPITAL_AVERAGE_PROCESS_TIME:
      return action.hospitalProcessTime;
    case RESET_PATIENT:
      return 0;    
    default:
      return state;
  }
};

const initialHospitalWaitingList = 0;
const hospitalWaitingList = (state = initialHospitalWaitingList, action) => {
  switch (action.type) {
    case SET_PATIENT_SELECTED_HOSPITAL_WAITING_LIST:
      return action.hospitalWaitingList;
    case RESET_PATIENT:
      return 0;    
    default:
      return state;
  }
};

const initialHospitalWaitingTime = 0;
const hospitalWaitingTime = (state = initialHospitalWaitingTime, action) => {
  switch (action.type) {
    case SET_PATIENT_SELECTED_HOSPITAL_WAITING_TIME:
      return action.hospitalWaitingTime;
    case RESET_PATIENT:
      return 0;    
    default:
      return state;
  }
};

const initialLevelOfPain = 0;
const levelOfPain = (state = initialLevelOfPain, action) => {
  switch (action.type) {
    case SET_PATIENT_SELECTED_LEVEL_OF_PAIN:
      return action.levelOfPain;
    case RESET_PATIENT:
      return 0;    
    default:
      return state;
  }
};

export default combineReducers({
  illnessName,
  hospitalName,
  hospitalAvgProcessTime,
  hospitalWaitingList,
  hospitalWaitingTime,
  levelOfPain
});
