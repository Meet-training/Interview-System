import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { useSelector } from "react-redux";

const ResultTable = ({ setShowTable }) => {
  const resultData = useSelector((state) => state.interviewResult);

  return (
    <React.Fragment>
      <Typography
        variant="h6"
        sx={{ fontStyle: "italic", textDecoration: "underline" }}
      >
        Interview Result Table
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "end",
          mb: 2,
          pt: 1,
          mx: "1rem",
        }}
      >
        <Button
          variant="outlined"
          color="inherit"
          onClick={() => setShowTable(false)}
          sx={{
            mr: 1,
            "&.MuiButtonBase-root:hover": {
              borderColor: "error.main",
              bgcolor: "#e30909",
              color: "#fff",
            },
          }}
        >
          Back
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: "#1c9c51" }}>
            <TableRow>
              <TableCell align="left" sx={{ color: "white" }}>
                Date
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Name
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Interviewer
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Technology
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Experience
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Round
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Communication
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Practical
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Coding
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Technical
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Notes
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log("resultData : ", resultData)}
            {resultData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date}
                </TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.interviewer}</TableCell>
                <TableCell align="left">{row.technology}</TableCell>
                <TableCell align="left">{row.experience}</TableCell>
                <TableCell align="left">{row.round}</TableCell>
                <TableCell align="left">{row.communication}</TableCell>
                <TableCell align="left">{row.practical}</TableCell>
                <TableCell align="left">{row.coding}</TableCell>
                <TableCell align="left">{row.technical}</TableCell>
                <TableCell align="left">{row.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default ResultTable;
