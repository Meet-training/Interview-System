import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
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

function getCurrentResult(state) {
  return state.interviewResult.find((t) => t.id === state.current_result) || {};
}

export default function HomePage() {
  const dispatch = useDispatch();

  const curResult = useSelector(getCurrentResult);

  const [practicalRound, setPracticalRound] = useState(false);

  const [interviewResultData, setInterviewResultData] = useState(curResult);

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
    console.log("dropdownvalue", value);
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
    } else {
      dispatch({
        type: "Update_Interview_Result",
        payload: interviewResultData,
      });
    }
    setShowTable(true);
    setInterviewResultData({});
  };

  return (
    <>
      {!showTable && (
        <>
          <Paper elevation={4} sx={{ p: 4 }}>
            <Typography
              variant="h5"
              sx={{ textDecoration: "underline", mb: 4 }}
            >
              Add Interview Result
            </Typography>
            <Box sx={{ mb: 4 }}>
              <TextField
                sx={{ width: "90%" }}
                type="date"
                name="date"
                label="Date"
                value={interviewResultData.date || ""}
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
                value={interviewResultData.name || ""}
                onChange={(e) => setDataHandler("name", e.target.value)}
                variant="outlined"
                error={!!error.name}
                helperText={error.name}
              />
              <FormControl sx={{ width: "45%", mr: 2 }}>
                <InputLabel id="demo-simple-select-label">
                  Interviewer
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="interviewer"
                  label="Interviewer"
                  sx={{ textAlign: "left" }}
                  value={interviewResultData.interviewer || ""}
                  onChange={(e) =>
                    setDataHandler("interviewer", e.target.value)
                  }
                  error={!!error.interviewer}
                  helperText={error.interviewer}
                >
                  <MenuItem value="Renish">Renish</MenuItem>
                  <MenuItem value="Dhaval">Dhaval</MenuItem>
                  <MenuItem value="Riddhi">Riddhi</MenuItem>
                  <MenuItem value="Malay">Malay</MenuItem>
                  <MenuItem value="Nirmal">Nirmal</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ mb: 4, ml: 2 }}>
              <FormControl sx={{ width: "45%", mr: 2 }}>
                <InputLabel id="demo-simple-select-label">
                  Technology
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="technology"
                  label="Technology"
                  sx={{ textAlign: "left" }}
                  value={interviewResultData.technology || ""}
                  onChange={(e) => setDataHandler("technology", e.target.value)}
                  error={!!error.technology}
                  helperText={error.technology}
                >
                  <MenuItem value="React Js">React Js</MenuItem>
                  <MenuItem value="Angular">Angular</MenuItem>
                  <MenuItem value=".Net">.Net</MenuItem>
                </Select>
              </FormControl>
              <TextField
                sx={{ width: "45%", mr: 2 }}
                type="number"
                name="experience"
                value={interviewResultData.experience || ""}
                onChange={(e) => setDataHandler("experience", e.target.value)}
                label="Experience"
                variant="outlined"
                error={!!error.experience}
                helperText={error.experience}
              />
            </Box>
            <Box sx={{ mb: 4, ml: 2 }}>
              <FormControl sx={{ width: "45%", mr: 2 }}>
                <InputLabel id="demo-simple-select-label">Round</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="round"
                  label="Round"
                  sx={{ textAlign: "left" }}
                  value={interviewResultData.round || ""}
                  onChange={(e) => setDataHandler("round", e.target.value)}
                  error={!!error.round}
                  helperText={error.round}
                >
                  <MenuItem value="Practical">Practical</MenuItem>
                  <MenuItem value="Technical">Technical</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ width: "45%", mr: 2 }}>
                <InputLabel id="demo-simple-select-label">
                  Communication
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="communication"
                  label="Communication"
                  sx={{ textAlign: "left" }}
                  value={interviewResultData.communication || ""}
                  onChange={(e) =>
                    setDataHandler("communication", e.target.value)
                  }
                  error={!!error.communication}
                  helperText={error.communication}
                >
                  <MenuItem value="Good">Good</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ mb: 4, ml: 2 }}>
              <TextField
                sx={{ width: "45%", mr: 2 }}
                type="number"
                name="practical"
                value={interviewResultData.practical || ""}
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
                value={interviewResultData.coding || ""}
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
                value={interviewResultData.technical || ""}
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
                value={interviewResultData.notes || ""}
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
                justifyContent: "center",
                alignItem: "center",
                flexDirection: "row",
                pt: 1,
                mx: "1rem",
              }}
            >
              <Box style={{ border: "1px" }} />

              <Button
                variant="outlined"
                onClick={() => setShowTable(true)}
                sx={{
                  mr: 1,
                  borderColor: "error.main",
                  borderRadius: 2,
                  color: "#e30909",
                  "&.MuiButtonBase-root:hover": {
                    borderColor: "error.main",
                    bgcolor: "#e30909",
                    color: "#fff",
                  },
                }}
              >
                Back
              </Button>
              <Button
                variant="contained"
                sx={{ mr: 1, borderRadius: 2 }}
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
            </Box>
          </Paper>
        </>
      )}
      <>{showTable && <ResultTable setShowTable={setShowTable} />}</>
    </>
  );
}
