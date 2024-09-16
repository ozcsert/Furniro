/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export const Links = ({ className, links }) => {
  return (
    <ul className={className}>
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  )
}
