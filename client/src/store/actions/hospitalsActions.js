import { reqFirstPageHospitals, reqNextPageHospitals  } from "../../api";
import {
  RECEIVE_HOSPITALS_SUCCESS,
  RECEIVE_HOSPITALS_FAIL,
  RESET_HOSPITALS
} from "../actionTypes";

export const receiveHospitalsSuccess = hospitals => ({
  type: RECEIVE_HOSPITALS_SUCCESS,
  hospitals
});

export const receiveHospitalsFail = result => ({
  type: RECEIVE_HOSPITALS_FAIL,
  result
});

export const resetHospitals = () => ({
  type: RESET_HOSPITALS
});

export const fetchAllHospitals = () => {
  return async dispatch => {
    const firstHospitalsData = await reqFirstPageHospitals();
    const pageSize = firstHospitalsData.page.totalElements;
    if (pageSize) {
      const hospitals = firstHospitalsData._embedded.hospitals;
      const nextPage = firstHospitalsData._links.next;
      const totalPage = firstHospitalsData.page.totalPages;
      if (nextPage) {
        for (let i = 1; i <= totalPage; i++) {
          const nextHospitalsData = await reqNextPageHospitals(i);
          const nextPageHospitals = nextHospitalsData._embedded.hospitals;
          for (let j = 0; j < nextPageHospitals.length; j++) {
            hospitals.push(nextPageHospitals[j]);
          }
        }
        dispatch(receiveHospitalsSuccess(hospitals));
      } else {
        dispatch(receiveHospitalsFail(firstHospitalsData));
      }   
    }
  };
};