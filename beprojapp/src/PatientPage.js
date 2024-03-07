import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

function PatientPage() {
  const [usageTimeLeft, setUsageTimeLeft] = useState(1800000); // Static usage time of 30 minutes
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
    <div>
      <h1>Welcome to Your Patient Portal</h1>
      <h2>Usage Time Remaining:</h2>
      {usageTimeLeft > 0 ? (
        <Countdown
          date={Date.now() + usageTimeLeft}
          renderer={({ hours, minutes, seconds }) => (
            <div>
              <div style={{ fontSize: 24, fontWeight: 'bold' }}>
                {hours.toString().padStart(2, '0')}:
                {minutes.toString().padStart(2, '0')}:
                {seconds.toString().padStart(2, '0')}
              </div>
              <div style={{ fontSize: 14 }}>
                <span>H </span>
                <span>M </span>
                <span>S</span>
              </div>
            </div>
          )}
        />
      ) : (
        <p>You have no usage time remaining.</p>
      )}

      <h2>Select Your VR World</h2>

      {/* Add more patient portal features here as needed  */}
    </div>
  );
}

export default PatientPage;