import { reqPatientsData, reqAddPatientData } from "../../api";
import {
  RECEIVE_PATIENTS_SUCCESS,
  RECEIVE_PATIENTS_FAIL,
  ADD_PATIENT_SUCCESS,
  ADD_PATIENT_FAIL,
  RESET_PATIENTS
} from "../actionTypes";

export const receivePatientsSuccess = patients => ({
  type: RECEIVE_PATIENTS_SUCCESS,
  patients
});

export const receivePatientsFail = result => ({
  type: RECEIVE_PATIENTS_FAIL,
  result
});

export const addPatientSuccess = result => ({
  type: ADD_PATIENT_SUCCESS,
  result
});

export const addPatientFail = result => ({
  type: ADD_PATIENT_FAIL,
  result
});

export const resetPatients = () => ({
  type: RESET_PATIENTS
});

// get patients
export const fetchAllPatients = () => {
  return async dispatch => {
    const patientsData = await reqPatientsData();
    const patients = patientsData.data.patients;
    const status = patientsData.data.status;
    if (status === "200") {
      dispatch(receivePatientsSuccess(patients));
    } else {
      dispatch(receivePatientsFail(patientsData));
    }
  };
};

// add a patient
export const reqAddAPatient = (
    illnessName,
    hospitalName,
    hospitalAvgProcessTime,
    hospitalWaitingList,
    hospitalWaitingTime,
    levelOfPain
  ) => {
    return async dispatch => {
      const result = await reqAddPatientData(
        illnessName,
        hospitalName,
        hospitalAvgProcessTime,
        hospitalWaitingList,
        hospitalWaitingTime,
        levelOfPain
      );
      if(result) {
        dispatch(addPatientSuccess(result));
      } else {
        dispatch(addPatientFail(result));
      }
    };
  };
