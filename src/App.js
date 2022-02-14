import React, { useState } from "react";
import { Box } from "@mui/material";
import "./App.css";
import NavBar from "./Components/Navbar";
import HomePage from "./Components/Home";
import ResultTable from "./Components/ResultTable";

const App = () => {
  const [showComponents, setShowComponents] = useState(false);

  const [selectedResultField, setSelectedResultField] = useState({});

  const showFormHandler = () => {
    setShowComponents(true);
  };

  const showTableHandler = () => {
    setShowComponents(false);
  };

  const getResultHandler = (values) => {
    setSelectedResultField(values);
  };

  const handleUpdateField = () => {
    setSelectedResultField({});
  };

  return (
    <React.Fragment>
      <div className="App">
        <Box sx={{ height: 30 }}>
          <NavBar />
        </Box>

        {showComponents ? (
          <HomePage
            showResultTable={showTableHandler}
            selectedResultField={selectedResultField}
            updateField={handleUpdateField}
          />
        ) : (
          <ResultTable
            showInterviewForm={showFormHandler}
            getResult={getResultHandler}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default App;
