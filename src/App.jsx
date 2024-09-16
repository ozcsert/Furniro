import { Routes, Route } from "react-router-dom"
import "./App.css"
import Homepage from "./pages/Homepage/index"

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/hompage" element={<Homepage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
