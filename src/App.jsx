import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Moon from "./components/destination/Moon";
import Mars from "./components/destination/Mars";
import Europa from "./components/destination/Europa";
import Titan from "./components/destination/Titan";
import Douglas from "./components/crew/Douglas";
import Mark from "./components/crew/Mark";
import Victor from "./components/crew/Victor";
import Anousheh from "./components/crew/Anousheh";
import LaunchVehicle from "./components/technology/LaunchVehicle";
import SpacePort from "./components/technology/SpacePort";
import SpaceVehicle from "./components/technology/SpaceCapsule";
import SpaceCapsule from "./components/technology/SpaceCapsule";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/destination" element={<Destination />}>
         <Route index element={<Moon />} />
          <Route path="moon" element={<Moon />} />
          <Route path="mars" element={<Mars />} />{" "}
          <Route path="europa" element={<Europa />} />
           <Route path='titan' element={<Titan/>}/>
        </Route>
        <Route path="/crew" element={<Crew />}>
         <Route index element={<Douglas />} />
          <Route path="douglas" element={<Douglas />} />
          <Route path="mark" element={<Mark />} />{" "}
          <Route path="victor" element={<Victor />} />
           <Route path='anousheh' element={<Anousheh/>}/>
        </Route> <Route path="/technology" element={<Technology />}>
         <Route index element={<LaunchVehicle />} />
          <Route path="launchVehicle" element={<LaunchVehicle />} />
          <Route path="spacePort" element={<SpacePort />} />
          <Route path="spaceCapsule" element={<SpaceCapsule />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
