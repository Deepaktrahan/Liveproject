import React from "react";
import { BrowserRouter } from "react-router-dom";  // Corrected import
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter basename="/Liveproject">
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
