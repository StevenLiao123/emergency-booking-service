import React from "react";
import Styles from "./Table.module.css";

export const Table = props => {
  const { patientsData } = props;
  return (
    <div className={Styles.container}>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Illness</th>
            <th>Level of pain</th>
            <th>Hospital</th>
            <th>Avg process time</th>
            <th>Patients at waiting list</th>
            <th>Waiting time</th>
          </tr>
        </thead>
        <tbody>
          {patientsData.map((patient, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td data-testid="test-table-td-illness-name">{patient.illnessName}</td>
              <td data-testid="test-table-td-level-of-pain">{patient.levelOfPain}</td>
              <td>{patient.hospitalName}</td>
              <td>{patient.hospitalAvgProcessTime}</td>
              <td>{patient.hospitalWaitingList}</td>
              <td>{patient.hospitalWaitingTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
