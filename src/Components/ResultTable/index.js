import React, { useState } from "react";
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
  TextField,
  Button,
} from "@mui/material";

import { tableCellClasses } from "@mui/material/TableCell";

import { useDispatch, useSelector } from "react-redux";

import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import { Box } from "@mui/system";
import { removeResult } from "../../Store/actions";
import AddIcon from "@mui/icons-material/Add";

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

const ResultTable = ({ showInterviewForm, getResult }) => {
  const dispatch = useDispatch();

  const resultData = useSelector((state) => state.interviewResult);
  const [rows, setRows] = useState(resultData);
  const [searchValue, setSearchValue] = useState("");

  const requestSerch = () => {
    const filteredRows = resultData.filter((item) => {
      return (
        item.date.toLowerCase().indexOf(searchValue) !== -1 ||
        item.technology.toLowerCase().indexOf(searchValue) !== -1
      );
    });
    setRows(filteredRows);
  };

  const newAddRecordHandler = () => {
    showInterviewForm();
  };

  const handleUpdateResult = (values) => {
    getResult(values);
    showInterviewForm();
  };

  const removeHandler = (id) => {
    dispatch(removeResult(id));
  };

  return (
    <div>
      <Typography
        variant="h6"
        sx={{ fontStyle: "italic", textDecoration: "underline", mt: 5 }}
      >
        Interview Result List
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <TextField
          sx={{ ml: 5, my: 2, width: "350px" }}
          id="search"
          label="Search By Date And Technology"
          variant="outlined"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Box sx={{ flex: "1 1 auto" }} />
        <Button
          align="right"
          variant="outlined"
          color="success"
          onClick={newAddRecordHandler}
          sx={{
            mr: 5,
            my: 2,
            fontWeight: 600,
            py: 1,

            "&.MuiButtonBase-root:hover": {
              borderColor: "mediumseagreen",
              bgcolor: "mediumseagreen",
              color: "#fff",
            },
          }}
        >
          <AddIcon sx={{ mr: 1 }} />
          Add New Record
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead sx={{ bgcolor: "#1c9c51" }}>
            <TableRow>
              <StyledTableCell sx={{ color: "white", fontWeight: "600" }}>
                Date
              </StyledTableCell>
              <StyledTableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Candidate
              </StyledTableCell>
              <StyledTableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Interviewer
              </StyledTableCell>
              <StyledTableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Technology
              </StyledTableCell>
              <StyledTableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Experience
              </StyledTableCell>
              <StyledTableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Round
              </StyledTableCell>
              <StyledTableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Communication
              </StyledTableCell>
              <StyledTableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Practical Completion
              </StyledTableCell>
              <StyledTableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Coding Standard
              </StyledTableCell>
              <StyledTableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Technical Completion
              </StyledTableCell>
              <StyledTableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Notes
              </StyledTableCell>
              <StyledTableCell
                sx={{ color: "white", fontWeight: "600" }}
                align="center"
              >
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
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
                  {row.communication || "-"}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.practical || "-"}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.coding || "-"}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.technical || "-"}
                </StyledTableCell>
                <StyledTableCell sx={{ textAlign: "justify" }}>
                  {row.notes}
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  sx={{ display: "flex", flexDirection: "row" }}
                >
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
    </div>
  );
};
export default ResultTable;
