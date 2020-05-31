import { connect } from "react-redux";
import { HospitalList } from "./HospitalList";
import { fetchAllHospitals } from "../../store/actions/hospitalsActions";
import {
  setPatientSelectedHospitalName,
  setPatientSelectedHospitalAvgProcessTime,
  setPatientSelectedHospitalWaitingList,
  setPatientSelectedHospitalWaitingTime
} from "../../store/actions/patientActions";

const getNewHospitalsBySelectedLOP = (hospitals, levelOfPain) => {
  let newHospitals = [];
  hospitals.filter(hospital => {
    const selectedWaitingList = hospital.waitingList.find(
      list => list.levelOfPain === levelOfPain //state.selectedLevelOfPain
    );
    hospital.waitingList = [selectedWaitingList];
    newHospitals.push(hospital);
  });
  return sortHospitalsByWaitingTime(newHospitals);
};

const sortHospitalsByWaitingTime = hospitals => {
  for (var j = 0; j < hospitals.length - 1; j++) {
    for (var i = 0; i < hospitals.length - 1 - j; i++) {
      const currentHospitalWaitingTime =
        hospitals[i].waitingList[0].patientCount *
        hospitals[i].waitingList[0].averageProcessTime;
      const nextHospitalWaitingTime =
        hospitals[i + 1].waitingList[0].patientCount *
        hospitals[i + 1].waitingList[0].averageProcessTime;
      if (currentHospitalWaitingTime > nextHospitalWaitingTime) {
        var temp = hospitals[i];
        hospitals[i] = hospitals[i + 1];
        hospitals[i + 1] = temp;
      }
    }
  }
  return hospitals;
};

const mapStateToProps = state => ({
  hospitals: getNewHospitalsBySelectedLOP(
    state.hospitals.hospitals,
    state.patient.levelOfPain
  )
});

const mapDispatchToProps = dispatch => ({
  suggestedHospitalsLoad: () => dispatch(fetchAllHospitals()),
  setSelectedHospitalName: hospitalName =>
    dispatch(setPatientSelectedHospitalName(hospitalName)),
  setSelectedHospitalProcessTime: hospitalProcessTime =>
    dispatch(setPatientSelectedHospitalAvgProcessTime(hospitalProcessTime)),
  setSelectedHospitalWaitingList: hospitalWaitingList =>
    dispatch(setPatientSelectedHospitalWaitingList(hospitalWaitingList)),
  setSelectedHospitalWaitingTime: hospitalWaitingTime =>
    dispatch(setPatientSelectedHospitalWaitingTime(hospitalWaitingTime))
});

export default connect(mapStateToProps, mapDispatchToProps)(HospitalList);
