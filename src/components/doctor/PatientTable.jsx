import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

function createData(name, gender, age, contact, id) {
  return { name, gender, age, contact, id };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 1),
  createData("Ice cream sandwich", 237, 9.0, 37, 2),
  createData("Eclair", 262, 16.0, 24, 3),
  createData("Cupcake", 305, 3.7, 67, 4),
  createData("Gingerbread", 356, 16.0, 49, 5),
  createData("Cupcake", 305, 3.7, 67, 6),
  createData("Cupcake", 305, 3.7, 67, 7),
];

export default function BasicTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        height: "40vh",
        overflow: "auto",
        "&::-webkit-scrollbar": {
          // display: 'none'
          width: "12px",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-track": {
          // '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,.1)",
          borderRadius: "10px",
          // outline: '1px solid slategrey'
        },
      }}
    >
      <Table  sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#e2e8f0" }}>
            <TableCell sx={{ fontWeight: "bold" }}>Patient Name</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Age
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Gender
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Contact
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Details
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.contact}</TableCell>
              <TableCell align="right">
                <Link to={`/patient_details/${row.id}`}>Link</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
