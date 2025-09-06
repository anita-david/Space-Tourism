import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

function Destination() {
  return (
    <div className="bg-[url('./assets/destination/background-destination-mobile.jpg')] sm:bg-[url('./assets/destination/background-destination-tablet.jpg')] lg:bg-[url('./assets/destination/background-destination-desktop.jpg')] bg-cover bg-center min-h-screen w-full">
      <Header />
			<p className="text-white uppercase text-center sm:text-left sm:pl-10 lg:pl-40 lg:text-[28px]"><span className="text-blue-300 mr-3">01</span> Pick your destination</p>
			<Outlet/>
			
	
    </div>
  );
}

export default Destination;
