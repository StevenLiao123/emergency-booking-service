import React from "react";
import Styles from "./List.module.css";

export const List = props => {
  return (
    <div className={Styles.container}>
        <li><span className={Styles.title} data-testid="test-list-title">{props.title}:</span><span className={Styles.value} data-testid="test-list-value">{props.value}</span></li>
    </div>
  );
};
