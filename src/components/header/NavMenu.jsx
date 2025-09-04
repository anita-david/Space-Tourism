import { NavLink } from "react-router-dom";

function NavMenu({ direction = "row" }) {
  const baseClasses =
    "text-white font-normal uppercase";
  const itemClasses =
    "flex items-center gap-2";

  return (
    <div
      className={
        direction === "row"
          ? // Desktop layout
            "hidden sm:flex lg:flex justify-between gap-[48px] px-[50px] bg-white/5 p-[40px] sm:text-[16px] lg:text-[18px]"
          : // Mobile sidebar layout
            "flex flex-col gap-6 text-[18px] "
      }
    >
      <NavLink to="/">
        <button className={`${baseClasses} ${itemClasses}`}>
          <span className="font-bold px-[5px]">00</span> Home
        </button>
      </NavLink>

      <NavLink to="/destination">
        <button className={`${baseClasses} ${itemClasses}`}>
          <span className="font-bold px-[5px]">01</span> Destination
        </button>
      </NavLink>

      <NavLink to="/crew">
        <button className={`${baseClasses} ${itemClasses}`}>
          <span className="font-bold px-[5px]">02</span> Crew
        </button>
      </NavLink>

      <NavLink to="/technology">
        <button className={`${baseClasses} ${itemClasses}`}>
          <span className="font-bold px-[5px]">03</span> Technology
        </button>
      </NavLink>
    </div>
  );
}

export default NavMenu;
