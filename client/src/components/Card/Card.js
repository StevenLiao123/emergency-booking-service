import React from "react";
import PropTypes from "prop-types";
import arrow from "../../assets/images/arrow.png";
import Styles from "./Card.module.css";

export const Card = props => {
  return (
    <div className={Styles.container}>
      <div className={Styles.body}>
        <div
          className={Styles.left}
          data-testid={`test-content-${props.testIndex}`}
        >
          {props.name}
        </div>
        <div className={Styles.right}>
          {props.showTime ? (
            <div
              className={Styles.clickarea}
              data-testid="test-clickarea"
              onClick={() =>
                props.callback(
                  props.name,
                  props.waitingTime,
                  props.patientCount,
                  props.averageProcessTime
                )
              }
            >
              <span className={Styles.title}>Wait time: </span>
              <span className={Styles.time} data-testid="test-waiting-time">{`${props.waitingTime} mins`}</span>
            </div>
          ) : (
            <img
              className={Styles.arrow}
              data-testid="test-button"
              src={arrow}
              alt="arrow"
              onClick={() => props.callback(props.name)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  waitingTime: PropTypes.number,
  patientCount: PropTypes.number,
  averageProcessTime: PropTypes.number,
  callback: PropTypes.func
};
