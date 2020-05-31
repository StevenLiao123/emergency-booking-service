/*
    This module is providing API functions for different requests.
*/
import ajax from "./ajax";
import { AZURE_BASE_URL, MONGO_BASE_URL } from "../utils/constants";

// get the first page of illnesses
export const reqFirstPageIllnesses = () =>
  ajax(AZURE_BASE_URL + "/illnesses", {}, "GET");

// get the next page of illnesses
export const reqNextPageIllnesses = page =>
  ajax(AZURE_BASE_URL + `/illnesses?limit=10&page=${page}`, {}, "GET");

// get the first page of hospitals
export const reqFirstPageHospitals = () =>
  ajax(AZURE_BASE_URL + "/hospitals", {}, "GET");

// get the next page of hospitals
export const reqNextPageHospitals = page =>
  ajax(AZURE_BASE_URL + `/hospitals?limit=10&page=${page}`, {}, "GET");

// get the patient's data
export const reqPatientsData = () =>
  ajax(MONGO_BASE_URL + "/patient", {}, "GET");

// add a new patient data
export const reqAddPatientData = (
  illnessName,
  hospitalName,
  hospitalAvgProcessTime,
  hospitalWaitingList,
  hospitalWaitingTime,
  levelOfPain
) =>
  ajax(
    MONGO_BASE_URL + "/patient/add",
    {
      illnessName,
      hospitalName,
      hospitalAvgProcessTime,
      hospitalWaitingList,
      hospitalWaitingTime,
      levelOfPain
    },
    "POST"
  );
