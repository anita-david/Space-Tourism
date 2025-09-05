import spaceCapsulePotrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import spaceCapsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import TechnologyNav from "./TechnologyNav";

function SpaceCapsule() {
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
            Space Capsule
          </p>
        </div>

        <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-blue-300 max-w-[327px] sm:max-w-[440px] lg:max-w-[540px] pb-10">
          A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
        </p>
      </div>

      <div className="order-2 lg:order-3 flex justify-center lg:justify-end mt-6 lg:mt-0">
        <img
          src={spaceCapsulePotrait}
          alt="Launch Vehicle Portrait"
          className="block sm:hidden lg:block w-[250px] sm:w-[350px] lg:w-[445px] h-auto"
        />

        <img
          src={spaceCapsuleLandscape}
          alt="Launch Vehicle Landscape"
          className="hidden sm:block lg:hidden w-[350px] h-auto"
        />
      </div>
    </div>
  );
}

export default SpaceCapsule;
