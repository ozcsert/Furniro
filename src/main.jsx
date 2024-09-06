import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import "./styles/abstracts/_variables.scss"
import "./styles/abstracts/_mixins.scss"
import "./styles/base/_reset.scss"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
)
