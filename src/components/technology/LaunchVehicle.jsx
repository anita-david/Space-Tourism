import launchVehiclePortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import launchVehicleLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import TechnologyNav from "./TechnologyNav";

function LaunchVehicle() {
  return (
    <div className="flex flex-col items-center text-center gap-8 lg:flex-row lg:items-center lg:text-left lg:justify-center lg:gap-12 lg:pt-10">
      
      <div className="order-3 lg:order-1 flex justify-center lg:justify-start lg:flex-col lg:items-start">
        <TechnologyNav />
      </div>

      <div className="order-4 lg:order-2 flex flex-col items-center text-center lg:items-start lg:text-left gap-4 lg:pl-6">
        <div>
          <p className="text-gray-200 uppercase text-[18px] sm:text-[20px]">
            The terminology
          </p>
          <p className="uppercase text-[24px] sm:text-[32px] lg:text-[40px] text-white bellefair pt-2">
            Launch Vehicle
          </p>
        </div>

        <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-blue-300 max-w-[327px] sm:max-w-[440px] lg:max-w-[540px] pb-10">
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used
          to carry a payload from Earth's surface to space, usually to Earth
          orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight
          on the launch pad!
        </p>
      </div>

      <div className="order-2 lg:order-3 flex justify-center lg:justify-end mt-6 lg:mt-0">
        <img
          src={launchVehiclePortrait}
          alt="Launch Vehicle Portrait"
          className="block sm:hidden lg:block w-[250px] sm:w-[350px] lg:w-[445px] h-auto"
        />

        <img
          src={launchVehicleLandscape}
          alt="Launch Vehicle Landscape"
          className="hidden sm:block lg:hidden w-[350px] h-auto"
        />
      </div>
    </div>
  );
}

export default LaunchVehicle;
