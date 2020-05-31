import React from "react";
import Styles from "./PainLevel.module.css";
import PropTypes from "prop-types";
import { ImageCardList } from "../../components";
import { useHistory } from "react-router-dom";

export const PainLevel = props => {
  const history = useHistory();

  const onHandleCallback = (level) => {
    // save selected illness to store
    props.setSelectedLevelOfPain(level)
    // ToDO: redirect to the hospital list page
    history.push('/hospital-list');
  };

  return (
    <div className={Styles.container}>
      <span>{props.illnessName}</span>
      <ImageCardList callback={onHandleCallback} />
    </div>
  );
};

PainLevel.propTypes = {
  illnessName: PropTypes.string,
  setSelectedIllness: PropTypes.func
};
