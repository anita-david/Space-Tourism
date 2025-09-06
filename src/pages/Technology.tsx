import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";


function Technology() {
  return (
    <div className="bg-[url('./assets/technology/background-technology-mobile.jpg')] sm:bg-[url('./assets/technology/background-technology-tablet.jpg')] lg:bg-[url('./assets/technology/background-technology-desktop.jpg')] bg-cover bg-center min-h-screen w-full">
      <Header />
			<p className="text-white uppercase text-center sm:text-left sm:pl-10 lg:pl-40 lg:text-[28px]"><span className="text-blue-300 mr-3">03</span> Space Launch 101</p>
			<Outlet/>
    </div>
  );
}

export default Technology;
