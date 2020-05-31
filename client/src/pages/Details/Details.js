import React from "react";
import PropTypes from "prop-types";
import { DetailsLists, Button } from "../../components";
import { useHistory } from "react-router-dom";
import Styles from "./Details.module.css";

export const Details = props => {
  const history = useHistory();
  const {
    illnessName,
    hospitalName,
    hospitalAvgProcessTime,
    hospitalWaitingList,
    hospitalWaitingTime,
    levelOfPain
  } = props.patient;

  const onHandleCallback = () => {
    props.addAPatient(
      illnessName,
      hospitalName,
      hospitalAvgProcessTime,
      hospitalWaitingList,
      hospitalWaitingTime,
      levelOfPain
    );
    // ToDO: redirect to the hospital list page
    props.resetAllHospitals();
    props.resetPatientDetails();
    props.resetPatientsData();
    history.push("/record");
  };

  return (
    <div className={Styles.container}>
      <DetailsLists patientData={props.patient} />
      <div className={Styles.recordButton}>
        <Button title="Check Records" callback={onHandleCallback} />
      </div>
    </div>
  );
};

Details.propTypes = {
  patient: PropTypes.object,
  addAPatient: PropTypes.func,
  resetAllHospitals: PropTypes.func,
  resetPatientDetails: PropTypes.func,
  resetPatientsData: PropTypes.func
};
