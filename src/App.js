import React, { useState } from "react";
import "./App.css";

// import pages
import Test from "./pages/Test";
import Login from "./pages/Login";
import PatientList from "./pages/PatientList";
import AddPatientForm from "./pages/AddPatientForm";

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
    <div className="background-image">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={dashboard} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
