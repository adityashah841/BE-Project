import { ResponsiveLine } from "@nivo/line";
import { React, useEffect, useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Box, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
// import { weeklyCatVsAmt } from "../../services/bankServices";

const NivoLine = () => {
  const data = [
    {
      id: "Pain Level",
      color: "hsl(228, 70%, 50%)",
      data: [
        {
          x: "Jan 9",
          y: 50,
        },
        {
          x: "Jan 10",
          y: 56,
        },
        {
          x: "Jan 11",
          y: 44,
        },
        {
          x: "Jan 12",
          y: 30,
        },
        {
          x: "Jan 13",
          y: 55,
        },
        {
          x: "Jan 14",
          y: 60,
        },
        {
          x: "Jan 15",
          y: 57,
        },
      ],
    },
    {
      id: "Blood Pressure",
      color: "hsl(40, 70%, 50%)",
      data: [
        {
          x: "Jan 9",
          y: 5,
        },
        {
          x: "Jan 10",
          y: 12,
        },
        {
          x: "Jan 11",
          y: 0,
        },
        {
          x: "Jan 12",
          y: 23,
        },
        {
          x: "Jan 13",
          y: 15,
        },
        {
          x: "Jan 14",
          y: 10,
        },
        {
          x: "Jan 15",
          y: 22,
        },
      ],
    },
    {
      id: "Weight",
      color: "hsl(10, 70%, 60%)",
      data: [
        {
          x: "Jan 9",
          y: 5,
        },
        {
          x: "Jan 10",
          y: 12,
        },
        {
          x: "Jan 11",
          y: 0,
        },
        {
          x: "Jan 12",
          y: 23,
        },
        {
          x: "Jan 13",
          y: 15,
        },
        {
          x: "Jan 14",
          y: 10,
        },
        {
          x: "Jan 15",
          y: 22,
        },
      ],
    },
  ];

  const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
      data={data}
      curve="catmullRom"
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      colors={{ scheme: "category10" }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Days",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "No. of patients",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      // enableArea={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflow: "auto",
          }}
        >
          <Typography
            variant="h5"
            // sx={bold_name}
            sx={{
              fontWeight: "bold",
              p: 2,
            }}
          >
            Statistics
          </Typography>
          <div style={{ height: "475px", width: "auto", overflow: "hidden" }}>
            <MyResponsiveLine data={data} />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default NivoLine;
