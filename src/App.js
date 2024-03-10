import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import React, { useState } from 'react';
// import './App.css';
import DoctorPage from './pages/doctor/DoctorPage';
import PatientPage from './pages/patient/PatientPage';
import PatientDetailsPage from './pages/doctor/PatientDetailsPage';
import SignIn from '../src/pages/auth/SignIn'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleLogin = (role) => {
    // Implement logic to validate credentials against a database or mock data
    const validLogin = true; // Replace with actual validation logic

    if (validLogin) {
      setIsLoggedIn(true);
      setUserRole(role);
    } else {
      alert('Invalid login credentials');
    }
  };

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div>
              <h1>Welcome!</h1>
              <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  required
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
                <br />
                <button onClick={() => handleLogin('patient')}>
                  <Link to="/patient">Login as Patient</Link>
                </button>
                <button onClick={() => handleLogin('doctor')}>
                  <Link to="/doctor">Login as Doctor</Link>
                </button>
              </form>
            </div>
          } />
          <Route path="/doctor" element={<DoctorPage />} />
          <Route path="/patient" element={<PatientPage />} />
          <Route path="/patient_details/:id" element={<PatientDetailsPage />} />
          <Route path='login' element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
