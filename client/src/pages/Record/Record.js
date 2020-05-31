import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Table, Loader, Button } from "../../components";
import { useHistory } from "react-router-dom";
import Styles from "./Record.module.css";

export const Record = props => {
  const [fetching, setFetching] = useState(true);
  const history = useHistory();
  const onHandleCallback = () => {
    // ToDO: redirect to the hospital list page
    history.push("/");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      props.getPatientsData();
      setFetching(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={Styles.container}>
      {fetching && <Loader />}
      {!fetching && (
        <div>
          <Table patientsData={props.patients} />
          <div className={Styles.recordButton}>
            <Button title="Another appointment" callback={onHandleCallback} />
          </div>
        </div>
      )}
    </div>
  );
};

Record.propTypes = {
  patients: PropTypes.array
};
