import DestinationNav from "../components/destination/DestinationNav";
import Moon from "../components/destination/Moon";
import Header from "../components/header/Header";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Destination() {
  return (
    <div className="bg-[url('./assets/destination/background-destination-mobile.jpg')] sm:bg-[url('./assets/destination/background-destination-tablet.jpg')] lg:bg-[url('./assets/destination/background-destination-desktop.jpg')] bg-cover bg-center h-screen">
      <Header />
			<p className="text-white uppercase text-center"><span className="text-blue-300 mr-3">01</span> Pick your destination</p>
			<Outlet/>
			
		
    </div>
  );
}

export default Destination;
