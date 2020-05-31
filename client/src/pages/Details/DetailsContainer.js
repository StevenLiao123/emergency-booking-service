import { connect } from "react-redux";
import { Details } from "./Details";
import { reqAddAPatient, resetPatients } from "../../store/actions/patientsAction";
import { resetPatient } from '../../store/actions/patientActions';
import { resetHospitals } from '../../store/actions/hospitalsActions';

const convertLevelOfPainToString = patient => {
  Object.keys(patient).map((patientData, index) => {
    if (patientData === "levelOfPain") {
      switch (
        patient[patientData] // 0 1 2 3 4
      ) {
        case 0:
          patient[patientData] = "Non urgent";
          break;
        case 1:
          patient[patientData] = "Less urgent";
          break;
        case 2:
          patient[patientData] = "Urgent";
          break;
        case 3:
          patient[patientData] = "Emergent";
          break;
        case 4:
          patient[patientData] = "Resuscitation";
          break;
        default:
          break;  
      }
    }
  });
  return patient;
};

const mapStateToProps = state => ({
  patient: convertLevelOfPainToString(state.patient)
});

const mapDispatchToProps = dispatch => ({
  addAPatient: (
    illnessName,
    hospitalName,
    hospitalAvgProcessTime,
    hospitalWaitingList,
    hospitalWaitingTime,
    levelOfPain
  ) =>
    dispatch(
      reqAddAPatient(
        illnessName,
        hospitalName,
        hospitalAvgProcessTime,
        hospitalWaitingList,
        hospitalWaitingTime,
        levelOfPain
      )
    ),
  resetAllHospitals: () => dispatch(resetHospitals()),
  resetPatientDetails: () => dispatch(resetPatient()),
  resetPatientsData: () => dispatch(resetPatients())  
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
