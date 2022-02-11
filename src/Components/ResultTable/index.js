import React from "react";
import { styled } from "@mui/material/styles";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
} from "@mui/material";

import { tableCellClasses } from "@mui/material/TableCell";

import { useDispatch, useSelector } from "react-redux";

import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ResultTable = ({ showInterviewForm, getData }) => {
  const dispatch = useDispatch();

  const resultData = useSelector((state) => state.interviewResult);

  const newAddRecordHandler = () => {
    showInterviewForm();
  };

  const handleUpdateResult = (values) => {
    getData(values);
    showInterviewForm();
  };

  const removeHandler = (id) => {
    dispatch({
      type: "Remove_Interview_Result",
      payload: id,
    });
  };

  return (
    <>
      <Typography
        variant="h6"
        sx={{ fontStyle: "italic", textDecoration: "underline", mt: 5 }}
      >
        Interview Result List
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
          color="success"
          onClick={newAddRecordHandler}
          sx={{
            mr: 1,
            borderRadius: 2,
            "&.MuiButtonBase-root:hover": {
              borderColor: "mediumseagreen",
              bgcolor: "mediumseagreen",
              color: "#fff",
            },
          }}
        >
          Add New Record
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead sx={{ bgcolor: "#1c9c51" }}>
            <TableRow>
              <StyledTableCell sx={{ color: "white" }}>Date</StyledTableCell>
              <StyledTableCell sx={{ color: "white" }} align="center">
                Name
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }} align="center">
                Interviewer
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }} align="center">
                Technology
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }} align="center">
                Experience
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }} align="center">
                Round
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }} align="center">
                Communication
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }} align="center">
                Practical
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }} align="center">
                Coding
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }} align="center">
                Technical
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }} align="center">
                Notes
              </StyledTableCell>
              <StyledTableCell sx={{ color: "white" }} align="center">
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultData.map((row) => (
              <StyledTableRow key={`${row.id}`}>
                <StyledTableCell component="th" scope="row">
                  {row.date}
                </StyledTableCell>
                <StyledTableCell align="center">{row.name}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.interviewer}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.technology}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.experience}
                </StyledTableCell>
                <StyledTableCell align="center">{row.round}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.communication}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.practical}
                </StyledTableCell>
                <StyledTableCell align="center">{row.coding}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.technical}
                </StyledTableCell>
                <StyledTableCell sx={{ textAlign: "justify" }}>
                  {row.notes}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button onClick={() => handleUpdateResult(row)}>
                    <EditRoundedIcon sx={{ color: "mediumseagreen" }} />
                  </Button>
                  <Button onClick={() => removeHandler(row.id)}>
                    <DeleteOutlineTwoToneIcon sx={{ color: "red" }} />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default ResultTable;
