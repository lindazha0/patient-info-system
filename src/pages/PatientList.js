import React, { useState, useEffect } from "react";
import formData from "../sample.json";

function DynamicForm() {
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    // Initialize form values with keys from the JSON file and empty values
    const initialValues = formData.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {});
    setFormValues(initialValues);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    // Here you would typically send formValues to your server
  };

  return (
    <div>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Rank</th>
          <th>Age</th>
          <th>Height</th>
          <th>Weight</th>
          <th>Sex</th>
          <th>Atrophy Status</th>
          <th>Dynamometry Test</th>
        </tr>
        {formData.map((field) => (
          <tr>
            <td>{field.first_name}</td>
            <td>{field.last_name}</td>
            <td>{field.rank}</td>
            <td>{field.age}</td>
            <td>{field.height}</td>
            <td>{field.weight}</td>
            <td>{field.sex}</td>
            <td>{field.atrophy_status}</td>
            <td>{field.dynamometry_test}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

const PatientList = ({ patients }) => {
  return (
    <div>
      <h2>Patient List</h2>
      <ul>
        {patients.map((patient, index) => (
          <li key={index}>
            {patient.name} - {patient.age} years old
          </li>
        ))}
      </ul>
      <DynamicForm />
    </div>
  );
};

export default PatientList;
