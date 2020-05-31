import {
  SET_PATIENT_SELECTED_ILLNESS_NAME,
  SET_PATIENT_SELECTED_HOSPITAL_NAME,
  SET_PATIENT_SELECTED_HOSPITAL_AVERAGE_PROCESS_TIME,
  SET_PATIENT_SELECTED_HOSPITAL_WAITING_LIST,
  SET_PATIENT_SELECTED_HOSPITAL_WAITING_TIME,
  SET_PATIENT_SELECTED_LEVEL_OF_PAIN,
  RESET_PATIENT
} from "../actionTypes";

export const setPatientSelectedIllnessName = illnessName => ({
  type: SET_PATIENT_SELECTED_ILLNESS_NAME,
  illnessName
});

export const setPatientSelectedHospitalName = hospitalName => ({
  type: SET_PATIENT_SELECTED_HOSPITAL_NAME,
  hospitalName
});

export const setPatientSelectedHospitalAvgProcessTime = hospitalProcessTime => ({
  type: SET_PATIENT_SELECTED_HOSPITAL_AVERAGE_PROCESS_TIME,
  hospitalProcessTime
});

export const setPatientSelectedHospitalWaitingList = hospitalWaitingList => ({
  type: SET_PATIENT_SELECTED_HOSPITAL_WAITING_LIST,
  hospitalWaitingList
});

export const setPatientSelectedHospitalWaitingTime = hospitalWaitingTime => ({
  type: SET_PATIENT_SELECTED_HOSPITAL_WAITING_TIME,
  hospitalWaitingTime
});

export const setPatientSelectedLOP = levelOfPain => ({
  type: SET_PATIENT_SELECTED_LEVEL_OF_PAIN,
  levelOfPain
});

export const resetPatient = () => ({
  type: RESET_PATIENT
});
