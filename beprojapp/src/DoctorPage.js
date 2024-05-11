import React, { useState, useEffect } from 'react';
import './DoctorPage.css';
import { Link } from 'react-router-dom';

const patients = [ // Replace with actual data fetching logic
  { id: 1, name: 'Gautam Mehendale', age: 22, condition: 'None' },
  { id: 2, name: 'Jane Smith', age: 25, condition: 'Heart Disease' },
  { id: 3, name: 'Michael Johnson', age: 45, condition: 'High Blood Pressure' },
];

function DoctorPage() {
  const [patientList, setPatientList] = useState([]);

  useEffect(() => {
    // Simulate data fetching here
    setPatientList(patients);
  }, []);

  return (
    <div className="doctor-page">
      <h1>Doctor Page</h1>
      <h2>List of Patients</h2>
      <ul className="patient-list">
        {patientList.map((patient) => (
          <li key={patient.id}>
            <span>{patient.name}</span> - ID: {patient.id}
            {/* Link to Patient Details Page with dynamic ID */}
            <Link to={`/doctor/${patient.id}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorPage;