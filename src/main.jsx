import { StrictMode } from 'react';
import App from './App';
import { createRoot } from "react-dom/client"
import "./index.css"
import "./styles/styles.scss"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)
