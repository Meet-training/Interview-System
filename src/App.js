import React from "react";
import { Paper, Box } from "@mui/material";
import "./App.css";
import NavBar from "./Components/Navbar";
import HomePage from "./Components/Home";
import ResultTable from "./Components/ResultTable";

export default function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Box sx={{ height: 30 }}>
          <NavBar />
        </Box>
        <Paper sx={{ mx: 10, my: 5 }} elevation={4} className="paper">
          <HomePage />
          {/* <ResultTable /> */}
        </Paper>
      </div>
    </React.Fragment>
  );
}
