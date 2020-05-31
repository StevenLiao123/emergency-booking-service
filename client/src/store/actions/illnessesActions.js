import { reqFirstPageIllnesses, reqNextPageIllnesses } from "../../api";
import {
  RECEIVE_ILLNESSES_SUCCESS,
  RECEIVE_ILLNESSES_FAIL
} from "../actionTypes";

export const receiveIllnessesSuccess = illnesses => ({
  type: RECEIVE_ILLNESSES_SUCCESS,
  illnesses
});

export const receiveIllnessesFail = result => ({
  type: RECEIVE_ILLNESSES_FAIL,
  result
});

export const fetchAllIllnesses = () => {
  return async dispatch => {
    const firstIllnessesData = await reqFirstPageIllnesses();
    const pageSize = firstIllnessesData.page.size;
    if (pageSize) {
      const illnesses = firstIllnessesData._embedded.illnesses;
      const nextPage = firstIllnessesData._links.next;
      const totalPage = firstIllnessesData.page.totalPages;
      if (nextPage) {
        for (let i = 1; i <= totalPage; i++) {
          const nextIllnessesData = await reqNextPageIllnesses(i);
          const nextPageIllnesses = nextIllnessesData._embedded.illnesses;
          for (let j = 0; j < nextPageIllnesses.length; j++) {
            illnesses.push(nextPageIllnesses[j]);
          }
        }
        dispatch(receiveIllnessesSuccess(illnesses));
      } else {
        dispatch(receiveIllnessesFail(firstIllnessesData));
      }   
    }
  };
};
