import { combineReducers } from 'redux';

import illnesses from './illnessesReducers';
import patient from './patientReducers';
import hospitals from './hospitalsReducers';
import patients from './patientsReducers';

const rootReducer = combineReducers({
    illnesses,
    patient,
    hospitals,
    patients
});

export default rootReducer;