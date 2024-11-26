import "./style.scss"
import { useNavigate } from "react-router-dom"
export const Drawer = () => {
  const navigate = useNavigate()

  const handleAuthNavigation = (authType) => {
    navigate(`/auth?type=${authType}`)
  }

  return (
    <div className="drawer-container">
      <div className="drawer-content">
        {" "}
        <div className="notification-container">
          <div className="notification">
            <ul>
              <li onClick={() => handleAuthNavigation("login")}>Login</li>
              <li onClick={() => handleAuthNavigation("register")}>Register</li>
              <li>Log Out</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
