<<<<<<< HEAD
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
=======
import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
>>>>>>> 8e8ac09e9ff6397ad6dbfcd0a672294eb4e525bb

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