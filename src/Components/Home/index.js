import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { useDispatch } from "react-redux";
import {
  validateDate,
  validateName,
  validateInterviewer,
  validateTechnology,
  validateExperience,
  validateRound,
  validateCommunication,
  validatePractical,
  validateCoding,
  validateTechnical,
  validateNotes,
} from "../Validation";
import ResultTable from "../ResultTable";

const initialValue = {
  date: "",
  name: "",
  interviewer: "",
  technology: "",
  experience: "",
  round: "",
  communication: "",
  practical: "",
  coding: "",
  technical: "",
  notes: "",
};

export default function HomePage() {
  const dispatch = useDispatch();

  const [interviewResultData, setInterviewResultData] = useState(initialValue);

  const [showTable, setShowTable] = useState(false);

  const [error, setError] = useState({
    date: null,
    name: null,
    interviewer: null,
    technology: null,
    experience: null,
    round: null,
    communication: null,
    practical: null,
    coding: null,
    technical: null,
    notes: null,
  });

  const setDataHandler = (name, value) => {
    let curState = { ...interviewResultData };
    curState[name] = value;
    setInterviewResultData(curState);

    switch (name) {
      case "date":
        setError({ date: validateDate(value) });
        break;
      case "name":
        setError({ name: validateName(value) });
        break;
      case "interviewer":
        setError({ interviewer: validateInterviewer(value) });
        break;
      case "technology":
        setError({ technology: validateTechnology(value) });
        break;
      case "experience":
        setError({ experience: validateExperience(value) });
        break;
      case "round":
        setError({ round: validateRound(value) });
        break;
      case "communication":
        setError({ communication: validateCommunication(value) });
        break;
      case "practical":
        setError({ practical: validatePractical(value) });
        break;
      case "coding":
        setError({ coding: validateCoding(value) });
        break;
      case "technical":
        setError({ technical: validateTechnical(value) });
        break;
      case "notes":
        setError({ notes: validateNotes(value) });
        break;
      default:
    }
  };

  const submitHandler = () => {
    if (interviewResultData.id === undefined) {
      dispatch({
        type: "Add_Interview_Result",
        payload: interviewResultData,
      });
    }
    setShowTable(true);
  };

  return (
    <>
      {!showTable && (
        <React.Fragment>
          <Paper elevation={4} sx={{ p: 4 }}>
            <Typography
              variant="h5"
              sx={{ textDecoration: "underline", mb: 4 }}
            >
              Interview Result
            </Typography>
            <Box sx={{ mb: 4 }}>
              <TextField
                sx={{ width: "90%" }}
                type="date"
                name="date"
                label="Date"
                vlaue={interviewResultData.date}
                onChange={(e) => setDataHandler("date", e.target.value)}
                variant="outlined"
                error={!!error.date}
                helperText={error.date}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Box sx={{ mb: 4, ml: 2 }}>
              <TextField
                sx={{ width: "45%", mr: 2 }}
                type="text"
                name="name"
                label="Name"
                vlaue={interviewResultData.name}
                onChange={(e) => setDataHandler("name", e.target.value)}
                variant="outlined"
                error={!!error.name}
                helperText={error.name}
              />
              <Select
                sx={{ width: "45%", mr: 2 }}
                value={interviewResultData.interviewer}
                label="Interviewer"
                error={!!error.name}
                helperText={error.name}
                onChange={(e) => setDataHandler("interviewer", e.target.value)}
              >
                <MenuItem value={10}>Meet</MenuItem>
                <MenuItem value={20}>Jaydeep</MenuItem>
                <MenuItem value={30}>Jatin</MenuItem>
                <MenuItem value={40}>Nitin</MenuItem>
              </Select>
            </Box>
            <Box sx={{ mb: 4, ml: 2 }}>
              <TextField
                sx={{ width: "45%", mr: 2 }}
                type="text"
                name="technology"
                vlaue={interviewResultData.technology}
                onChange={(e) => setDataHandler("technology", e.target.value)}
                label="Technology"
                variant="outlined"
                error={!!error.technology}
                helperText={error.technology}
              />
              <TextField
                sx={{ width: "45%", mr: 2 }}
                type="number"
                name="experience"
                vlaue={interviewResultData.experience}
                onChange={(e) => setDataHandler("experience", e.target.value)}
                label="Experience"
                variant="outlined"
                error={!!error.experience}
                helperText={error.experience}
              />
            </Box>
            <Box sx={{ mb: 4, ml: 2 }}>
              <TextField
                sx={{ width: "45%", mr: 2 }}
                type="text"
                name="round"
                label="Round"
                vlaue={interviewResultData.round}
                onChange={(e) => setDataHandler("round", e.target.value)}
                variant="outlined"
                error={!!error.round}
                helperText={error.round}
              />
              <TextField
                sx={{ width: "45%", mr: 2 }}
                name="communication"
                label="Communication"
                vlaue={interviewResultData.communication}
                onChange={(e) =>
                  setDataHandler("communication", e.target.value)
                }
                variant="outlined"
                error={!!error.communication}
                helperText={error.communication}
              />
            </Box>
            <Box sx={{ mb: 4, ml: 2 }}>
              <TextField
                sx={{ width: "45%", mr: 2 }}
                type="number"
                name="practical"
                vlaue={interviewResultData.practical}
                onChange={(e) => setDataHandler("practical", e.target.value)}
                label="Practical Completion"
                variant="outlined"
                error={!!error.practical}
                helperText={error.practical}
              />
              <TextField
                sx={{ width: "45%", mr: 2 }}
                type="number"
                name="coding"
                vlaue={interviewResultData.coding}
                onChange={(e) => setDataHandler("coding", e.target.value)}
                label="Coding Standerd"
                variant="outlined"
                error={!!error.coding}
                helperText={error.coding}
              />
            </Box>
            <Box sx={{ mb: 4, ml: 2 }}>
              <TextField
                sx={{ width: "45%", mr: 2 }}
                type="text"
                name="technical"
                vlaue={interviewResultData.technical}
                onChange={(e) => setDataHandler("technical", e.target.value)}
                label="Technical Round"
                variant="outlined"
                error={!!error.technical}
                helperText={error.technical}
              />
              <TextField
                sx={{ width: "45%", mr: 2 }}
                type="text"
                name="notes"
                vlaue={interviewResultData.notes}
                onChange={(e) => setDataHandler("notes", e.target.value)}
                label="Notes"
                variant="outlined"
                error={!!error.notes}
                helperText={error.notes}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 1,
                mx: "1rem",
              }}
            >
              <Button
                variant="contained"
                sx={{ mr: 1 }}
                onClick={submitHandler}
                disabled={
                  !interviewResultData.date ||
                  !interviewResultData.name ||
                  !interviewResultData.interviewer ||
                  !interviewResultData.technology ||
                  !interviewResultData.experience ||
                  !interviewResultData.round ||
                  !interviewResultData.communication ||
                  !interviewResultData.practical ||
                  !interviewResultData.coding ||
                  !interviewResultData.technical ||
                  !interviewResultData.notes
                }
              >
                Submit
              </Button>
              <Box sx={{ flex: "1 1 auto" }} style={{ border: "1px" }} />

              <Button
                variant="outlined"
                sx={{
                  mr: 1,
                  borderColor: "error.main",
                  color: "#e30909",
                  "&.MuiButtonBase-root:hover": {
                    borderColor: "error.main",
                    bgcolor: "#e30909",
                    color: "#fff",
                  },
                }}
              >
                Clear
              </Button>
            </Box>
          </Paper>
        </React.Fragment>
      )}
      <>{showTable && <ResultTable setShowTable={setShowTable} />}</>
    </>
  );
}
