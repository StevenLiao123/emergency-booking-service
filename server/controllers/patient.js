const Patient = require("../models/patient");

exports.patients_get_all = async (req, res) => {
  try {
    const allPatients = await Patient.find();
    // res.json(allPatients);
    res.json({
      data: {
        status: "200",
        patients: allPatients
      }
    });
  } catch (err) {
    res.json({
      message: err
    });
  }
};

exports.patients_add_new_one = (req, res, next) => {
  const patient = new Patient({
    illnessName: req.body.illnessName,
    hospitalName: req.body.hospitalName,
    hospitalAvgProcessTime: req.body.hospitalAvgProcessTime,
    hospitalWaitingList: req.body.hospitalWaitingList,
    hospitalWaitingTime: req.body.hospitalWaitingTime,
    levelOfPain: req.body.levelOfPain
  });

  patient
    .save()
    .then(result => {
      res.status(201).json({
        data: {
          message: "Patient added!",
          status: "200",
          result
        }
      });
    })
    .catch(err => {
      res.status(500).json({
        data: {
          message: err
        }
      });
    });
};
