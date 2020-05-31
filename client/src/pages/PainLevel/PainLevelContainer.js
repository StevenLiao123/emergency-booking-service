import { connect } from 'react-redux';
import { PainLevel } from './PainLevel';
import { setPatientSelectedLOP } from '../../store/actions/patientActions';

const mapStateToProps = state => ({
    illnessName: state.patient.illnessName
});

const mapDispatchToProps = dispatch => ({
    setSelectedLevelOfPain: (levelOfPain) => dispatch(setPatientSelectedLOP(levelOfPain))
});

export default connect(mapStateToProps, mapDispatchToProps)(PainLevel);