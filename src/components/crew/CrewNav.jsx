import { NavLink } from "react-router-dom";
const dots = [
  { id: 1, path: "/crew/douglas" },
  { id: 2, path: "/crew/mark" },
  { id: 3, path: "/crew/victor" },
  { id: 4, path: "/crew/anousheh" },
];

function CrewNav() {

  return (
    <div className="flex gap-4 justify-center items-center mt-6">
      {dots.map(({ id, path }) => (
        <NavLink
          key={id}
          to={path}
          className={({ isActive }) =>
            `w-3 h-3 rounded-full transition-colors duration-300 ${
              isActive ? "bg-white" : "bg-blue-300"
            }`
          }
        />
      ))}
    </div>
  );
}

export default CrewNav;





