import { Link } from "react-router-dom"

export const NavLink = ({ path, name }) => {
  return (
    <li>
      <Link to={path}>{name}</Link>
    </li>
  )
}
