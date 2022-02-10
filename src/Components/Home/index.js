import React from "react";

import { Formik, ErrorMessage } from "formik";
import {
  FormControl,
  InputLabel,
  Typography,
  MenuItem,
  Grid,
  Select,
  TextField,
  Button,
  Paper,
} from "@mui/material";

import schema from "../Validation/schema";
import { useDispatch } from "react-redux";

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

export default function HomePage({ showResultTable }) {
  const dispatch = useDispatch();

  const showTableHandler = () => {
    showResultTable();
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        mt: 6,
        mb: 4,
        mx: 15,
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        Interview Result Form
      </Typography>

      <Formik
        initialValues={{
          ...initialValue,
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          if (values.id === undefined) {
            dispatch({
              type: "Add_Interview_Result",
              payload: values,
            });
            showResultTable();
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,

          isValid,

          touched,
          values,
        }) => (
          <form
            autoComplete="off"
            method="POST"
            noValidate
            onSubmit={handleSubmit}
          >
            <Grid sx={{ mb: 4 }}>
              <TextField
                sx={{ width: "100%" }}
                type="date"
                name="date"
                label="Date"
                value={values.date}
                onBlur={handleBlur}
                onChange={handleChange}
                error={Boolean(touched.date && errors.date)}
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                required
              />
              <ErrorMessage
                component="div"
                name="date"
                className="invalid-feedback"
              />
            </Grid>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="name"
                  label="Name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(touched.name && errors.name)}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="name"
                  className="invalid-feedback"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl sx={{ width: "100%", mr: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Interviewer
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="interviewer"
                    label="Interviewer"
                    onBlur={handleBlur}
                    sx={{ textAlign: "left" }}
                    value={values.interviewer}
                    onChange={handleChange}
                    error={Boolean(touched.interviewer && errors.interviewer)}
                    fullWidth
                    required
                  >
                    <MenuItem value="Renish">Renish</MenuItem>
                    <MenuItem value="Dhaval">Dhaval</MenuItem>
                    <MenuItem value="Riddhi">Riddhi</MenuItem>
                    <MenuItem value="Malay">Malay</MenuItem>
                    <MenuItem value="Nirmal">Nirmal</MenuItem>
                  </Select>
                </FormControl>
                <ErrorMessage
                  component="div"
                  name="interviewer"
                  className="invalid-feedback"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item md={6} xs={12}>
                <FormControl sx={{ width: "100%", mr: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Technology
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="technology"
                    label="Technology"
                    onBlur={handleBlur}
                    sx={{ textAlign: "left" }}
                    value={values.technology}
                    onChange={handleChange}
                    error={Boolean(touched.technology && errors.technology)}
                    fullWidth
                    required
                  >
                    <MenuItem value="ReactJs">ReactJs</MenuItem>
                    <MenuItem value="Angular">Angular</MenuItem>
                    <MenuItem value=".Net">.Net</MenuItem>
                  </Select>
                </FormControl>
                <ErrorMessage
                  component="div"
                  name="technology"
                  className="invalid-feedback"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="experience"
                  label="Experience"
                  onBlur={handleBlur}
                  value={values.experience}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(touched.experience && errors.experience)}
                  required
                  fullWidth
                />
                <ErrorMessage
                  component="div"
                  name="experience"
                  className="invalid-feedback"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item md={6} xs={12}>
                <FormControl sx={{ width: "100%", mr: 2 }}>
                  <InputLabel id="demo-simple-select-label">Round</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="round"
                    label="Round"
                    onBlur={handleBlur}
                    sx={{ textAlign: "left" }}
                    value={values.round}
                    onChange={handleChange}
                    error={Boolean(touched.round && errors.round)}
                    fullWidth
                    required
                  >
                    <MenuItem value="Practical">Practical</MenuItem>
                    <MenuItem value="Technical">Technical</MenuItem>
                  </Select>
                </FormControl>
                <ErrorMessage
                  component="div"
                  name="round"
                  className="invalid-feedback"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <FormControl sx={{ width: "100%", mr: 2 }}>
                  <InputLabel id="demo-simple-select-label">
                    Communication
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="communication"
                    label="Communication"
                    onBlur={handleBlur}
                    sx={{ textAlign: "left" }}
                    value={values.communication}
                    onChange={handleChange}
                    error={Boolean(
                      touched.communication && errors.communication
                    )}
                    fullWidth
                    required
                  >
                    <MenuItem value="Good">Good</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                  </Select>
                </FormControl>
                <ErrorMessage
                  component="div"
                  name="communication"
                  className="invalid-feedback"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="practical"
                  label="Practical Completion"
                  value={values.practical}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(touched.practical && errors.practical)}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="practical"
                  className="invalid-feedback"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="coding"
                  label="Coding"
                  value={values.coding}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(touched.coding && errors.coding)}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="coding"
                  className="invalid-feedback"
                />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="technical"
                  label="Technical Completion"
                  value={values.technical}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(touched.technical && errors.technical)}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="technical"
                  className="invalid-feedback"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField
                  sx={{ width: "100%", mr: 2 }}
                  type="text"
                  name="notes"
                  label="Notes"
                  value={values.notes}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  variant="outlined"
                  error={Boolean(touched.notes && errors.notes)}
                  required
                />
                <ErrorMessage
                  component="div"
                  name="notes"
                  className="invalid-feedback"
                />
              </Grid>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItem: "center",
                flexDirection: "row",
                pt: 3,
                mx: "1rem",
              }}
            >
              <Button
                variant="outlined"
                onClick={showTableHandler}
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
                sx={{ borderRadius: 2 }}
                color="primary"
                disabled={Boolean(!isValid)}
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
          </form>
        )}
      </Formik>
    </Paper>
  );
}
