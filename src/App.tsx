import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.tsx";
import Destination from "./pages/Destination.tsx";
import Crew from "./pages/Crew.tsx";
import Technology from "./pages/Technology.tsx";
import Moon from "./components/destination/Moon.tsx";
import Mars from "./components/destination/Mars.tsx";
import Europa from "./components/destination/Europa.tsx";
import Titan from "./components/destination/Titan.tsx";
import Douglas from "./components/crew/Douglas.tsx";
import Mark from "./components/crew/Mark.tsx";
import Victor from "./components/crew/Victor.tsx";
import Anousheh from "./components/crew/Anousheh.tsx";
import LaunchVehicle from "./components/technology/LaunchVehicle.tsx";
import SpacePort from "./components/technology/SpacePort.tsx";
import SpaceCapsule from "./components/technology/SpaceCapsule.tsx";

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
          <Route path="titan" element={<Titan />} />
        </Route>
        <Route path="/crew" element={<Crew />}>
          <Route index element={<Douglas />} />
          <Route path="douglas" element={<Douglas />} />
          <Route path="mark" element={<Mark />} />{" "}
          <Route path="victor" element={<Victor />} />
          <Route path="anousheh" element={<Anousheh />} />
        </Route>{" "}
        <Route path="/technology" element={<Technology />}>
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
