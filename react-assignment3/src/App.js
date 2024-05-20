// src/App.js
import React from "react";
import SurveyForm from "./SurveyForm";
import "./App.css";

const divStyle = {
  backgroundImage: `url(/logo192.png)`,
  height: '100vh',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};


function App() {
  return (
    <div >
      <header className="App-header">
        <SurveyForm />
      </header>
    </div>
  );
}

export default App;
