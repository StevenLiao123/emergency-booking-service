import React from "react";
import PropTypes from "prop-types";
import { List } from "../List/List";
import Styles from "./DetailsLists.module.css";

export const DetailsLists = props => {
  return (
    <div className={Styles.container}>
      {Object.keys(props.patientData).map((patient, index) => (
        <List
          key={`image-${index}`}
          title={patient}
          value={props.patientData[patient]}
          imageIndex={index + 1}
        />
      ))}
    </div>
  );
};

DetailsLists.propTypes = {
  patientData: PropTypes.object.isRequired
};
