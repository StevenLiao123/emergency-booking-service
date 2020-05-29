const Patient = require("../models/patient");

exports.patients_get_all = async (req, res) => {
  try {
    const allPatients = await Patient.find();
    res.json(allPatients);
  } catch (err) {
    res.json({
      message: err
    });
  }
};

exports.patients_add_new_one = (req, res, next) => {
  const patient = new Patient({
    illness: req.body.illness,
    levelOfPain: req.body.levelOfPain,
    hospitalName: req.body.hospitalName,
    waitingTime: req.body.waitingTime
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
