import React, { useState } from 'react';

// import pages
import Login from './pages/Login';
import PatientList from './pages/PatientList';
import AddPatientForm from './pages/AddPatientForm';

// for routers
import { Routes, Route } from "react-router-dom";


function App() {
  const [patients, setPatients] = useState([]);

  const addPatient = (patient) => {
    setPatients([...patients, patient]);
  };

  let dashboard = (
    <div className="App">
      <h1>Patient Information Management System</h1>
      <AddPatientForm addPatient={addPatient} />
      <PatientList patients={patients} />
    </div>
  );

  // for login page test
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={dashboard} />
    </Routes>
  );
}

export default App;
