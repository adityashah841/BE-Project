import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Background } from 'victory-core';
function PatientPage() {
  const [usageTimeLeft, setUsageTimeLeft] = useState(1000); // Static usage time of 30 minutes
  const [selectedVRWorld, setSelectedVRWorld] = useState(null);


  // Fetch usage time from a backend API or calculate locally
  useEffect(() => {
    // const fetchUsageTime = async () => {
    //   // ... logic to fetch usage time from your backend
    //   const response = await fetch('/api/patient/usage');  
    //   const data = await response.json();
    //   setUsageTimeLeft(data.timeRemaining); // Example data format
    // };

    // fetchUsageTime(); 
  }, []);

  return (
    <Box sx={{ alignItems: "center", textAlign: "center", display: "flex", justifyContent: "center" }}>
      <Box>
        <h1>Welcome to Your Patient Portal</h1>
        <h2>Usage Time Remaining:</h2>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CountdownCircleTimer
            onComplete={
              () => {
                alert("Time Up")
              }
            }
            isPlaying
            size={300}
            duration={usageTimeLeft}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 5, 2, 0]}
          >
            {({ remainingTime }) => {
              const minutes = Math.floor(remainingTime / 60)
              const seconds = remainingTime % 60

              // return `${minutes}:${seconds}`
              return (
                <Typography sx={{ fontSize: 60, fontWeight: "semi-bold" }}> {`${minutes}:${seconds}`} </Typography>
              )
            }
            }
          </CountdownCircleTimer>
        </Box>
        <h2>Select Your VR World</h2>
        <Paper sx={{ width: "60vw", p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Paper sx={{
                backgroundColor: "#f4f4f5",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                fontWeight: "bold",
                height: "200px"
              }} >
                World 1
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper sx={{
                backgroundColor: "#f4f4f5",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                fontWeight: "bold",
                height: "200px"
              }} >
                World 2
              </Paper>
            </Grid>           <Grid item xs={4}>
              <Paper sx={{
                backgroundColor: "#f4f4f5",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                fontWeight: "bold",
                height: "200px"
              }} >
                World 3
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Box>

      {/* Add more patient portal features here as needed  */}
    </Box>
  );
}

export default PatientPage;