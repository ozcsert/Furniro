/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

<<<<<<< HEAD
const FooterNavComponent = ({ title, links } ) => {
=======
const FooterNavComponent = ({ title, links }) => {
>>>>>>> develop
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

<<<<<<< HEAD

=======
>>>>>>> develop
export default FooterNavComponent
