import { connect } from "react-redux";
import { Record } from "./Record";
import { fetchAllPatients } from "../../store/actions/patientsAction";

const mapStateToProps = state => ({
  patients: state.patients.patients
});

const mapDispatchToProps = dispatch => ({
  getPatientsData: () => dispatch(fetchAllPatients())
});

export default connect(mapStateToProps, mapDispatchToProps)(Record);