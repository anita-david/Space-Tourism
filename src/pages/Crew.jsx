import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";


function Crew() {
  return (
    <div className="bg-[url('./assets/crew/background-crew-mobile.jpg')] sm:bg-[url('./assets/crew/background-crew-tablet.jpg')] lg:bg-[url('./assets/crew/background-crew-desktop.jpg')] bg-cover bg-center min-h-screen w-full">
      <Header />
			<p className="text-white uppercase text-center sm:text-left sm:pl-10 lg:pl-40 lg:text-[28px]"><span className="text-blue-300 mr-3">02</span> Meet your crew</p>
			<Outlet/>
    </div>
  );
}

export default Crew;
