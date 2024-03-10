import React, { useState, useEffect } from 'react';
// import './DoctorPage.css';
import { Link } from 'react-router-dom';
import PatientTable from "../../components/doctor/PatientTable"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from "@mui/material/Grid";
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography'

import PatientChart from "../../components/doctor/PatientChart"
import PatientDetailsPage from './PatientDetailsPage';

// const patients = [ // Replace with actual data fetching logic
//   { id: 1, name: 'John Doe', age: 30, condition: 'Diabetes' },
//   { id: 2, name: 'Jane Smith', age: 25, condition: 'Heart Disease' },
//   { id: 3, name: 'Michael Johnson', age: 45, condition: 'High Blood Pressure' },
// ];

function DoctorPage() {
  const [patientList, setPatientList] = useState([]);

  // useEffect(() => {
  //   // Simulate data fetching here
  //   setPatientList(patients);
  // }, []);

  return (
    <>
      <AppBar position='static' sx={{ mb: 3 }} >
        <Toolbar variant='dense'>

        </Toolbar>
      </AppBar >

      <Box sx={{ backgroundColor: "" }}>
        <Box sx={{ mx: 5 }} >
          <Typography variant='h5' sx={{ fontWeight: "bold", mb: 1, }}> Patients View</Typography>
          <Paper sx={{ mb: 3, boxShadow: "none" }}>
            <TextField variant="outlined" fullWidth size="small" label="Search" />
          </Paper>
          <Grid container>
            <Grid item xs={12}>

              <PatientTable />
            </Grid>
          </Grid>
        </Box >
      </Box>

    </>
  );
}

export default DoctorPage;