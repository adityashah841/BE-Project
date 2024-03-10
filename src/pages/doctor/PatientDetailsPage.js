import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
// import './PatientDetailsPage.css'
import Paper from "@mui/material/Paper"
import PatientChart from "../../components/doctor/PatientChart"
import Grid from "@mui/material/Grid"
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
const PatientDetailsPage = () => {

  return (

    <Box sx={{ backgroundColor: "#e2e8f0" }}>
      <AppBar position='static' sx={{ mb: 3 }} >
        <Toolbar variant='dense'>

        </Toolbar>
      </AppBar >
      <Box sx={{ m: 2, mb: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} >
            <Paper sx={{ p: 2, borderRadius: 3 }}>
              <Typography variant='h5' sx={{ fontWeight: "bold" }} >Details</Typography>
              <Stack direction='column'>
                <Typography>
                  Name : John Doe
                </Typography>
                <Typography>
                  Age : 30
                </Typography>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={6} spacing={2}>
            <Paper sx={{ p: 2, borderRadius: 3 }}>
              <Typography variant='h5' sx={{ fontWeight: "bold" }} >Appointments</Typography>
              <Stack direction='column'>
                <Typography>
                  Last Appointment: 2023-02-22
                </Typography>
                <Typography>
                  Next Appointment: 2023-03-22
                </Typography>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} spacing={2}>
            <Paper sx={{ p: 2, borderRadius: 3 }}>
              <Typography variant='h5' sx={{ fontWeight: "bold" }} >Medications</Typography>
              <Stack direction='column'>
                <ul>
                  <li>Metformin 500mg, 1 tablet twice daily</li>
                  <li>Lantus 10 units daily</li>
                </ul>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Paper sx={{ m: 2, borderRadius: 3 }}>

        <PatientChart />
      </Paper>
    </Box>

  );
};

export default PatientDetailsPage;