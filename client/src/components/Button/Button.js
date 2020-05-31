import React from "react";
import Styles from "./Button.module.css";

export const Button = props => {
  return (
    <button className={Styles.container} data-testid="test-button" onClick={props.callback}>{props.title}</button>
  );
};
