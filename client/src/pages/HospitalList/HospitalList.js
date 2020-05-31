import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CardList, Loader } from '../../components';
import { useHistory } from 'react-router-dom';

export const HospitalList = props => {
  const [fetching, setFetching] = useState(true);
  const history = useHistory();

  const onHandleCallback = (name, waitingTime, patientCount, averageProcessTime) => {
    // save selected illness to store
    props.setSelectedHospitalName(name);
    props.setSelectedHospitalProcessTime(averageProcessTime);
    props.setSelectedHospitalWaitingList(patientCount+1);
    props.setSelectedHospitalWaitingTime(waitingTime);
    // ToDO: redirect to the details page
    history.push('/details');
  };

  useEffect(() => {
    props.suggestedHospitalsLoad();
    setFetching(false);
  }, []);

  return (
    <div>
      {fetching && <Loader />}
      {!fetching && (
        <CardList hospitals={props.hospitals} callback={onHandleCallback}/>
      )}
    </div>
    
  );
};

HospitalList.propTypes = {
  hospitals: PropTypes.array,
  suggestedHospitalsLoad: PropTypes.func,
  setSelectedHospitalName: PropTypes.func,
  setSelectedHospitalProcessTime: PropTypes.func,
  setSelectedHospitalWaitingList: PropTypes.func,
  setSelectedHospitalWaitingTime: PropTypes.func
};