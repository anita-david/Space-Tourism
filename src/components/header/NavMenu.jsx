import { NavLink } from "react-router-dom";

function NavMenu({ direction = "row" }) {
  const baseClasses = "text-white font-normal uppercase";
  const itemClasses = "flex items-center gap-2";

  return (
    <div
      className={
        direction === "row"
          ? // Desktop layout
            "hidden sm:flex lg:flex justify-between gap-[48px] px-[50px] bg-white/5 p-[40px] sm:text-[16px] lg:text-[18px]"
          : // Mobile sidebar layout
            "flex flex-col gap-6 text-[18px]"
      }
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseClasses} ${itemClasses} ${
            direction === "row"
              ? isActive
                ? "border-b-[3px] border-white pb-2"
                : "border-b-[3px] border-transparent pb-2"
              : isActive
              ? "border-r-[3px] border-white pr-2"
              : "border-r-[3px] border-transparent pr-2"
          }`
        }
      >
        <span className="font-bold px-[5px]">00</span> Home
      </NavLink>

      <NavLink
        to="/destination"
        className={({ isActive }) =>
          `${baseClasses} ${itemClasses} ${
            direction === "row"
              ? isActive
                ? "border-b-[3px] border-white pb-2"
                : "border-b-[3px] border-transparent pb-2"
              : isActive
              ? "border-r-[3px] border-white pr-2"
              : "border-r-[3px] border-transparent pr-2"
          }`
        }
      >
        <span className="font-bold px-[5px]">01</span> Destination
      </NavLink>

      <NavLink
        to="/crew"
        className={({ isActive }) =>
          `${baseClasses} ${itemClasses} ${
            direction === "row"
              ? isActive
                ? "border-b-[3px] border-white pb-2"
                : "border-b-[3px] border-transparent pb-2"
              : isActive
              ? "border-r-[3px] border-white pr-2"
              : "border-r-[3px] border-transparent pr-2"
          }`
        }
      >
        <span className="font-bold px-[5px]">02</span> Crew
      </NavLink>

      <NavLink
        to="/technology"
        className={({ isActive }) =>
          `${baseClasses} ${itemClasses} ${
            direction === "row"
              ? isActive
                ? "border-b-[3px] border-white pb-2"
                : "border-b-[3px] border-transparent pb-2"
              : isActive
              ? "border-r-[3px] border-white pr-2"
              : "border-r-[3px] border-transparent pr-2"
          }`
        }
      >
        <span className="font-bold px-[5px]">03</span> Technology
      </NavLink>
    </div>
  );
}

export default NavMenu;
