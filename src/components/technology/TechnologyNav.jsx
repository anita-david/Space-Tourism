import { NavLink } from "react-router-dom";

const techSteps = [
  { id: 1, path: "/technology/launchVehicle" },
  { id: 2, path: "/technology/spacePort" },
  { id: 3, path: "/technology/spaceCapsule" },
];

function TechnologyNav() {
  return (
    <div className="flex flex-row lg:flex-col gap-4 items-center mt-6">
      {techSteps.map(({ id, path }) => (
        <NavLink
          key={id}
          to={path}
          className={({ isActive }) =>
            `w-10 h-10 flex items-center justify-center rounded-full border border-white font-bold transition-colors duration-300 ${
              isActive
                ? "bg-white !text-black" 
                : "bg-transparent text-white" 
            }`
          }
        >
          {id}
        </NavLink>
      ))}
    </div>
  );
}

export default TechnologyNav;
