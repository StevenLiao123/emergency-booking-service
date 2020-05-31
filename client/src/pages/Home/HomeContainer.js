import { connect } from 'react-redux';
import { Home } from './Home';
import { fetchAllIllnesses } from '../../store/actions/illnessesActions';
import { setPatientSelectedIllnessName } from '../../store/actions/patientActions';

const mapStateToProps = state => ({
    illnesses: state.illnesses.illnesses
});

const mapDispatchToProps = dispatch => ({
    initialIllnessesLoad: () => dispatch(fetchAllIllnesses()),
    setSelectedIllnessName: (illnessName) => dispatch(setPatientSelectedIllnessName(illnessName))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);