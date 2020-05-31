import React from "react";
import { Card } from "../Card/Card";
import Styles from "./CardList.module.css";

export const CardList = props => {
  return (
    <div className={Styles.container}>
      {!props && <h1>No Data!</h1>}
      {props.illnesses &&
        props.illnesses.map((illness, index) => (
          <Card
            key={`illness-${index}`}
            name={illness.illness.name}
            id={illness.illness.id}
            callback={props.callback}
            testIndex={index + 1}
          />
        ))}
      {props.hospitals &&
        props.hospitals.map((hospital, index) => (
          <Card
            key={`hospital-${index}`}
            name={hospital.name}
            waitingTime={
              hospital.waitingList[0].patientCount *
              hospital.waitingList[0].averageProcessTime
            }
            patientCount={hospital.waitingList[0].patientCount}
            averageProcessTime={hospital.waitingList[0].averageProcessTime}
            callback={props.callback}
            testIndex={index + 1}
            showTime
          />
        ))}
    </div>
  );
};
