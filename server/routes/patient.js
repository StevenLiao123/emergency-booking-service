const express = require('express');
const router = express.Router();

const PatientsController = require('../controllers/patient');

// get back all patients
router.get("/", PatientsController.patients_get_all);

// Create a new patient
router.post("/add", PatientsController.patients_add_new_one);

module.exports = router;
