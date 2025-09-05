import spacePortPotrait from "../../assets/technology/image-spaceport-portrait.jpg";
import spacePortLandscape from "../../assets/technology/image-spaceport-landscape.jpg";
import TechnologyNav from "./TechnologyNav";

function SpacePort() {
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
            Space Port
          </p>
        </div>

        <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-blue-300 max-w-[327px] sm:max-w-[440px] lg:max-w-[540px] pb-10">
          A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.
        </p>
      </div>

      <div className="order-2 lg:order-3 flex justify-center lg:justify-end mt-6 lg:mt-0">
        <img
          src={spacePortPotrait}
          alt="Launch Vehicle Portrait"
          className="block sm:hidden lg:block w-[250px] sm:w-[350px] lg:w-[445px] h-auto"
        />

        <img
          src={spacePortLandscape}
          alt="Launch Vehicle Landscape"
          className="hidden sm:block lg:hidden w-[350px] h-auto"
        />
      </div>
    </div>
  );
}

export default SpacePort;
