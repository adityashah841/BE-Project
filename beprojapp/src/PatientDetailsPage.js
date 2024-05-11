import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './PatientDetailsPage.css'

const PatientDetailsPage = () => {
  const bloodSugarRef = useRef(null);
  const weightRef = useRef(null);
  const bloodPressureRef = useRef(null);

  useEffect(() => {
    const bloodSugarData = [
      { x: 5, y: 90 },
      { x: 10, y: 88 },
      { x: 15, y: 83 },
      { x: 20, y: 83 },
      { x: 25, y: 80 },
      { x: 30, y: 80 },
      { x: 35, y: 79 },
      { x: 40, y: 74 },
      { x: 45, y: 74 },
      { x: 50, y: 74 },
      { x: 55, y: 75 },
      { x: 60, y: 74 },
    ];

    const weightData = [
      { x: 5, y: 13.56 },
      { x: 10, y: 11.09 },
      { x: 15, y: 14.28},
      { x: 20, y: 12.17 },
      { x: 25, y: 10.73 },
      { x: 30, y: 11.95 },
      { x: 35, y: 8.41 },
      { x: 40, y: 8.13 },
      { x: 45, y: 5.84 },
      { x: 50, y: 9.62 },
      { x: 55, y: 6.37 },
      { x: 60, y: 3.68 },
    ];

    const bloodPressureData = [
      { x: 5, y: 4 },
      { x: 10, y: 3 },
      { x: 15, y: 4 },
      { x: 20, y: 3 },
      { x: 25, y: 3 },
      { x: 30, y: 2 },
      { x: 35, y: 3 },
      { x: 40, y: 2 },
      { x: 45, y: 1 },
      { x: 50, y: 2 },
      { x: 55, y: 1 },
      { x: 60, y: 0 },
    ];

    const drawLineChart = (data, ref, color) => {
      const margin = { top: 20, right: 20, bottom: 30, left: 50 };
      const width = 400 - margin.left - margin.right;
      const height = 270 - margin.top - margin.bottom;

      const x = d3.scaleLinear().domain([1, 60]).range([0, width]);
      const y = d3.scaleLinear().domain([d3.min(data, d => d.y) * 0.9, d3.max(data, d => d.y) * 1.1]).range([height, 0]);

      const line = d3
        .line()
        .x((d) => x(d.x))
        .y((d) => y(d.y));

      const svg = d3.select(ref.current).append('svg').attr('width', width + margin.left + margin.right).attr('height', height + margin.top + margin.bottom);
      
      const chart = svg
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
        
      chart
        .append('path')
        .datum(data)
        .attr('class', 'line')
        .attr('d', line)
        .style("stroke", color);

      chart
        .append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

      chart.append('g').attr('class', 'y axis').call(d3.axisLeft(y));
    };

    drawLineChart(bloodSugarData, bloodSugarRef, "red");
    drawLineChart(weightData, weightRef, "blue");
    drawLineChart(bloodPressureData, bloodPressureRef, "green");
  }, []);

  return (
    <div className="patient-details-page">
      <div className="patient-details">
        <h1>Patient Details</h1>
        <table className="patient-details-table"> <thead> <tr> <th>Patient Details</th> </tr> </thead> <tbody> <tr> <td>Name: Gautam Mehendale</td> </tr> <tr> <td>Age: 22</td> </tr> <tr> <td>Condition: None</td> </tr> <tr> <td>Last Appointment: 2024-02-22</td> </tr> <tr> <td>Next Appointment: 2024-05-22</td> </tr> <tr> <td>Medications:</td> </tr> <tr> <td>- Metformin 500mg, 1 tablet twice daily</td> </tr> <tr> <td>- Lantus 10 units daily</td> </tr> </tbody> </table>
      </div>
      <div className="charts">
        <div className="chart-container">
          <h2>Hear Rate Levels</h2>
          <div ref={bloodSugarRef} style={{ width: 400, height: 270 }}></div>
        </div>
        <div className="chart-container">
          <h2>Skin Conductance Levels</h2>
          <div ref={weightRef} style={{ width: 400, height: 270 }}></div>
        </div>
        <div className="chart-container">
          <h2>Pain Levels</h2>
          <div ref={bloodPressureRef} style={{ width: 400, height: 270 }}></div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailsPage;