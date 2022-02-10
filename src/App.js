import React, { useState } from "react";
import { Box } from "@mui/material";
import "./App.css";
import NavBar from "./Components/Navbar";
import HomePage from "./Components/Home";
import ResultTable from "./Components/ResultTable";

export default function App() {
  const [show, setShow] = useState(false);

  const showFormHandler = () => {
    setShow(true);
  };

  const showTableHandler = () => {
    setShow(false);
  };

  return (
    <React.Fragment>
      <div className="App">
        <Box sx={{ height: 30 }}>
          <NavBar />
        </Box>

        {show ? (
          <HomePage showResultTable={showTableHandler} />
        ) : (
          <ResultTable showInterviewForm={showFormHandler} />
        )}
      </div>
    </React.Fragment>
  );
}
