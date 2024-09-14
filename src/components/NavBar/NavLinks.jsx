import { NavLink } from "./Navlink"

export const NavbarLinks = ({ className }) => {
  const links = [
    { path: "/", name: "Home" },
    { path: "/shop", name: "Shop" },
    { path: "/contact", name: "Contact" },
    { path: "/about", name: "About" },
  ]

  return (
    <ul className={className}>
      {links.map((link, index) => (
        <NavLink key={index} path={link.path} name={link.name} />
      ))}
    </ul>
  )
}
