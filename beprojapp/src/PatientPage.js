import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';

function PatientPage() {
  const [usageTimeLeft, setUsageTimeLeft] = useState(180000); // Static usage time of 30 minutes
  const [selectedVRWorld, setSelectedVRWorld] = useState(null);
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  useEffect(() => {
    let timer;
    if (isWindowOpen) {
      timer = setTimeout(() => {
        setIsWindowOpen(false); // Close the window after 5 minutes
      }, 30000); // 5 minutes
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isWindowOpen]);

  const openWindow = () => {
    setIsWindowOpen(true);
    // Open your window here, adjust properties as needed
    const newWindow = window.open('', 'Window Name', 'width=400,height=400');
    if (newWindow) {
      newWindow.onbeforeunload = () => {
        setIsWindowOpen(false);
      };
    }
  };

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
      {/* Button to open window */}
      <button onClick={openWindow}>Open Window</button>

      {isWindowOpen && (
        <p>Window is open for 5 minutes. Display any content here.</p>
      )}

      {/* Add more patient portal features here as needed */}
    </div>
  );
}

export default PatientPage;
