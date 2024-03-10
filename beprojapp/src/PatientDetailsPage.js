import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './PatientDetailsPage.css'

const PatientDetailsPage = () => {
  const bloodSugarRef = useRef(null);
  const weightRef = useRef(null);
  const bloodPressureRef = useRef(null);

  useEffect(() => {
    const bloodSugarData = [
      { x: 1, y: 120 },
      { x: 2, y: 130 },
      { x: 3, y: 125 },
      { x: 4, y: 110 },
      { x: 5, y: 125 },
      { x: 6, y: 135 },
      { x: 7, y: 120 },
      { x: 8, y: 115 },
      { x: 9, y: 120 },
      { x: 10, y: 130 },
      { x: 11, y: 125 },
      { x: 12, y: 115 },
    ];

    const weightData = [
      { x: 1, y: 180 },
      { x: 2, y: 182 },
      { x: 3, y: 185 },
      { x: 4, y: 180 },
      { x: 5, y: 183 },
      { x: 6, y: 187 },
      { x: 7, y: 185 },
      { x: 8, y: 182 },
      { x: 9, y: 180 },
      { x: 10, y: 183 },
      { x: 11, y: 185 },
      { x: 12, y: 182 },
    ];

    const bloodPressureData = [
      { x: 1, y: 120 },
      { x: 2, y: 125 },
      { x: 3, y: 122 },
      { x: 4, y: 115 },
      { x: 5, y: 120 },
      { x: 6, y: 125 },
      { x: 7, y: 122 },
      { x: 8, y: 115 },
      { x: 9, y: 120 },
      { x: 10, y: 125 },
      { x: 11, y: 122 },
      { x: 12, y: 115 },
    ];

    const drawLineChart = (data, ref, color) => {
      const margin = { top: 20, right: 20, bottom: 30, left: 50 };
      const width = 400 - margin.left - margin.right;
      const height = 270 - margin.top - margin.bottom;

      const x = d3.scaleLinear().domain([1, 12]).range([0, width]);
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
        <table className="patient-details-table"> <thead> <tr> <th>Patient Details</th> </tr> </thead> <tbody> <tr> <td>Name: John Doe</td> </tr> <tr> <td>Age: 30</td> </tr> <tr> <td>Condition: Diabetes</td> </tr> <tr> <td>Last Appointment: 2023-02-22</td> </tr> <tr> <td>Next Appointment: 2023-03-22</td> </tr> <tr> <td>Medications:</td> </tr> <tr> <td>- Metformin 500mg, 1 tablet twice daily</td> </tr> <tr> <td>- Lantus 10 units daily</td> </tr> </tbody> </table>
      </div>
      <div className="charts">
        <div className="chart-container">
          <h2>Blood Sugar Levels</h2>
          <div ref={bloodSugarRef} style={{ width: 400, height: 270 }}></div>
        </div>
        <div className="chart-container">
          <h2>Weight</h2>
          <div ref={weightRef} style={{ width: 400, height: 270 }}></div>
        </div>
        <div className="chart-container">
          <h2>Blood Pressure</h2>
          <div ref={bloodPressureRef} style={{ width: 400, height: 270 }}></div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetailsPage;