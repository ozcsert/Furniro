import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import { useState } from "react"
import "./App.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hompage" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;