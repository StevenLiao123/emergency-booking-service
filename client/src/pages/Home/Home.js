import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CardList, Loader } from '../../components';
import { useHistory } from 'react-router-dom';

export const Home = props => {
  const [fetching, setFetching] = useState(true);
  const history = useHistory();

  const onHandleCallback = (illnessName) => {
    // save selected illness to store
    props.setSelectedIllnessName(illnessName);
    // ToDO: redirect to the pain level page
    history.push('/pain-level');
  };

  useEffect(() => {
    props.initialIllnessesLoad();
    setFetching(false);
  }, []);

  return (
    <div className="container">
      {fetching && <Loader />}
      {!fetching && (
        <CardList illnesses={props.illnesses} callback={onHandleCallback} />
      )}
    </div>
  );
};

Home.propTypes = {
  illnesses: PropTypes.array,
  initialIllnessesLoad: PropTypes.func,
  setSelectedIllnessName: PropTypes.func
};