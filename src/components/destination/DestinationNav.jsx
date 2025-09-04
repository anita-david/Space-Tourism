// DestinationNav.jsx
import { NavLink } from "react-router-dom";
import { navLinks } from "./navLinks"; // adjust the path accordingly

function DestinationNav() {
  const baseClasses = "uppercase pb-2 text-white";
  const activeClasses = "border-b-[3px] border-white";

  return (
    <nav className="flex gap-10 justify-center items-center z-50">
      {navLinks.map(({ name, path }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : "text-white/70"}`
          }
        >
          {name}
        </NavLink>
      ))}
    </nav>
  );
}

export default DestinationNav;
